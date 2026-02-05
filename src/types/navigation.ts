import { Movie } from "../types/movie";

/* ---------- HOME STACK ---------- */
export type HomeStackParamList = {
  Home: undefined;
  Details: { movie: Movie };
};

/* ---------- SEARCH STACK ---------- */
export type SearchStackParamList = {
  Search: undefined;
  Details: { movie: Movie };
};

/* ---------- WATCHLIST STACK ---------- */
export type WatchlistStackParamList = {
  Watchlist: undefined;
  Details: { movie: Movie };
};

/* ---------- TABS ---------- */
export type TabParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  WatchlistStack: undefined;
};
