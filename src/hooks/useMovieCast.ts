import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/tmdb.service";


interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export function useMovieCast(movieId: number) {
  const [cast, setCast] = useState<Cast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCast() {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } finally {
        setLoading(false);
      }
    }

    loadCast();
  }, [movieId]);

  return { cast, loading };
}
