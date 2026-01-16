import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { clearSession, getSession, saveSession } from "@/src/utils/storage";

interface AuthContextData {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function login() {
    // mock token
    await saveSession("mock-token-123");
    setIsAuthenticated(true);
  }

  async function logout() {
    await clearSession();
    setIsAuthenticated(false);
  }

  async function loadSession() {
    const token = await getSession();
    setIsAuthenticated(!!token);
    setLoading(false);
  }

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
