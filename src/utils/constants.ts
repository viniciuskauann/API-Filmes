// App
export const APP_NAME = "TMDB Explorer";

// Navegação
export const TAB_ROUTES = {
  HOME: "Home",
  SEARCH: "Search",
  WATCHLIST: "Watchlist",
} as const;

// API / TMDB
export const TMDB = {
  BASE_URL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
  IMAGE_URL: process.env.EXPO_PUBLIC_TMDB_IMAGE_URL,
};

// Mensagens
export const MESSAGES = {
  EMPTY_HOME: "Nenhum filme disponível no momento.",
  EMPTY_WATCHLIST: "Sua watchlist está vazia.",
  SEARCH_PLACEHOLDER: "Buscar filmes...",
  LOGIN_SUBTITLE: "Login simulado para acessar o app",
};

// Datas
export const DATE_FORMAT = {
  DEFAULT: "dd/MM/yyyy",
};
