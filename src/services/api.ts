import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
  timeout: 10000,
  params: {
    api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    language: "pt-BR",
    
  },
  headers: {
    Accept:"application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  },
});

export default api;
