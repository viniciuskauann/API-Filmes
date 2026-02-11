import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie } from "../types/movie";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../database/favorite.repository";

interface FavoritesContextData {
  favorites: Movie[];
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: Movie) => void; 
  loading: boolean;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  function loadFavorites() {
    const data = getFavorites();
    setFavorites(data);
    setLoading(false);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  const isFavorite = useCallback(
    (movieId: number) => {
      return favorites.some((movie) => movie.id === movieId);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (movie: Movie) => {
      if (isFavorite(movie.id)) {
        removeFavorite(movie.id);
      } else {
        addFavorite(movie);
      }

      // 🔑 sempre recarrega do banco
      loadFavorites();
    },
    [isFavorite]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite, loading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
