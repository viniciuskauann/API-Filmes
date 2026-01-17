import * as SecureStore from "expo-secure-store";

const AUTH_KEY = "TMDB_AUTH_SESSION";

export async function saveSession(token: string) {
  await SecureStore.setItemAsync(AUTH_KEY, token);
}

export async function getSession() {
  return SecureStore.getItemAsync(AUTH_KEY);
}

export async function clearSession() {
  await SecureStore.deleteItemAsync(AUTH_KEY);
}
