import { Movie } from "../types/movie";
import { db } from "./sqlite";


export function addFavorite(movie: Movie) {
  if (!movie) {
    throw new Error("Movie is required");
  }

  db.runSync(
    `
    INSERT OR REPLACE INTO favorites
    (id, title, poster, rating, releaseDate, createdAt)
    VALUES (?, ?, ?, ?, ?, ?)
  `,
    [
      movie.id,
      movie.title,
      movie.posterPath,
      movie.rating,
      movie.releaseDate,
      new Date().toISOString(),
    ]
  );
}

export function removeFavorite(movieId: number) {
  if (typeof movieId !== "number") {
    throw new Error("Movie ID is required");
  }

  db.runSync(`DELETE FROM favorites WHERE id = ?`, [movieId]);
}

export function getFavorites(): Movie[] {
  const result = db.getAllSync(`SELECT * FROM favorites ORDER BY createdAt DESC`);

  if (!result || result.length === 0) {
    return [];
  }

  return result.map((item: any) => ({
    id: item.id,
    title: item.title,
    posterPath: item.poster,
    backdropPath: item.poster,
    rating: item.rating,
    releaseDate: item.releaseDate,
    overview: item.overview || "",
  }));
}

export function isFavorite(movieId: number): boolean {
  if (typeof movieId !== "number") {
    throw new Error("Movie ID is required");
  }

  const result = db.getFirstSync(
    `SELECT id FROM favorites WHERE id = ?`,
    [movieId]
  );

  return !!result;
}
