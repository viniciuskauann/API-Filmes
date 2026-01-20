import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/tmdb.service";


interface Review {
  id: string;
  author: string;
  content: string;
}

export function useMovieReviews(movieId: number) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, [movieId]);

  return { reviews, loading };
}
