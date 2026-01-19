import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/navigation/AppRoutes";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";

export default function App() {
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
