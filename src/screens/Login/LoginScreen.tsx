import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { loginStyles } from "./loginStyles";

export function LoginScreen() {

  const { theme } = useTheme();
  const styles = loginStyles(theme);


  const { login } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 16 }}>
        TMDB Explorer
      </Text>

      <Text style={{ opacity: 0.6, marginBottom: 32 }}>
        Login simulado para acessar o app
      </Text>

      <TouchableOpacity
        onPress={login}
        style={{
          backgroundColor: "#2563EB",
          paddingVertical: 14,
          paddingHorizontal: 32,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "700" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
