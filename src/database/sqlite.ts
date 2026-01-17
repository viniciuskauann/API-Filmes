import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("tmdb.db");

export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      poster TEXT NOT NULL,
      rating REAL NOT NULL,
      releaseDate TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);
}
