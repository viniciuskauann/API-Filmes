import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie } from "../types/movie";
import { addFavorite, getFavorites, removeFavorite } from "../database/favorite.repository";

interface FavoritesContextData {
  favorites: Movie[];
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: Movie) => Promise<void>;
  loading: boolean;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

interface ProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: ProviderProps) {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadFavorites() {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } finally {
      setLoading(false);
    }
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
    async (movie: Movie) => {
      const exists = isFavorite(movie.id);

      if (exists) {
        await removeFavorite(movie.id);
        setFavorites((prev) =>
          prev.filter((item) => item.id !== movie.id)
        );
      } else {
        await addFavorite(movie);
        setFavorites((prev) => [...prev, movie]);
      }
    },
    [isFavorite]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        loading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

/* Hook opcional (caso queira usar direto sem wrapper) */
export function useFavoritesContext() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within FavoritesProvider"
    );
  }

  return context;
}

export { FavoritesContext };
