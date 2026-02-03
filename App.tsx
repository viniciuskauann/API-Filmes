import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import { AppRoutes } from "./src/navigation/AppRoutes";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { initDatabase } from "./src/database/sqlite";

// 🔒 impede splash nativo de sumir sozinho
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        initDatabase();

        // simula carregamentos reais (auth, theme, storage)
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
