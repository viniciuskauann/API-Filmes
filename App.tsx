import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/navigation/AppRoutes";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { useEffect } from "react";
import { initDatabase } from "./src/database/sqlite";

export default function App() {

   useEffect(() => {
    initDatabase();
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
