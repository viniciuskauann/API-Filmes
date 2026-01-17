import { useEffect, useState } from "react";

import { Movie } from "../types/movie";
import { addFavorite, getFavorites, isFavorite, removeFavorite } from "../database/favorite.repository";


export function useFavorites(movieId?: number) {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [favorite, setFavorite] = useState(false);

  function loadFavorites() {
    setFavorites(getFavorites());
  }

  function toggleFavorite(movie: Movie) {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
    loadFavorites();
  }

  useEffect(() => {
    loadFavorites();
    if (movieId) {
      setFavorite(isFavorite(movieId));
    }
  }, [movieId]);

  return {
    favorites,
    isFavorite: favorite,
    toggleFavorite,
  };
}
