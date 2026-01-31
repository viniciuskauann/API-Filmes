export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  releaseDate: string;
  overview: string;
  backdropPath: string;
  genres?: { id: number; name: string }[];
  duration?: string;
  year?: string;
  readonly releaseYear?: string;
  readonly runtime?: number;
}
