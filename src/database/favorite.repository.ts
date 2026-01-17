import { Movie } from "../types/movie";
import { db } from "./sqlite";


export function addFavorite(movie: Movie) {
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
  db.runSync(`DELETE FROM favorites WHERE id = ?`, [movieId]);
}

export function getFavorites(): Movie[] {
  const result = db.getAllSync(`SELECT * FROM favorites ORDER BY createdAt DESC`);

  return result.map((item: any) => ({
    id: item.id,
    title: item.title,
    posterPath: item.poster,
    rating: item.rating,
    releaseDate: item.releaseDate,
    overview: "",
  }));
}

export function isFavorite(movieId: number): boolean {
  const result = db.getFirstSync(
    `SELECT id FROM favorites WHERE id = ?`,
    [movieId]
  );

  return !!result;
}
