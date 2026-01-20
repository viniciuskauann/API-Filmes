import api from "./api";
import { handleApiError } from "./errors";
import { Movie } from "../types/movie";

function mapMovie(movie: any): Movie {
  return {
    id: movie.id,
    title: movie.title,
    posterPath: `${process.env.EXPO_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    overview: movie.overview,
  };
}


/* Cast */
export async function getMovieCredits(movieId: number) {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

/* Reviews */
export async function getMovieReviews(movieId: number) {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}

export async function getNowPlaying(): Promise<Movie[]> {
  try {
    const { data } = await api.get("/movie/now_playing");
    return data.results.map(mapMovie);
  } catch (error: any) {
    handleApiError(error);
    return [];
  }
}

export async function getPopular(): Promise<Movie[]> {
  try {
    const { data } = await api.get("/movie/popular");
    return data.results.map(mapMovie);
  } catch (error: any) {
    handleApiError(error);
    return [];
  }
}

export async function getTopRated(): Promise<Movie[]> {
  try {
    const { data } = await api.get("/movie/top_rated");
    return data.results.map(mapMovie);
  } catch (error: any) {
    handleApiError(error);
    return [];
  }
}

export async function getUpcoming(): Promise<Movie[]> {
  try {
    const { data } = await api.get("/movie/upcoming");
    return data.results.map(mapMovie);
  } catch (error: any) {
    handleApiError(error);
    return [];
  }
}

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!query) return [];

  try {
    const { data } = await api.get("/search/movie", {
      params: { query },
    });
    return data.results.map(mapMovie);
  } catch (error: any) {
    handleApiError(error);
    return [];
  }
}
