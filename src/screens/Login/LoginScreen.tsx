import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../context/ThemeContext";
import { loginStyles } from "./loginStyles";
import { useNavigation } from "@react-navigation/native";

export function LoginScreen() {
  const { theme } = useTheme();
  const styles = loginStyles(theme);

  const { login, loading } = useAuth();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TMDB Explorer</Text>

      <Text style={styles.subtitle}>
        Login simulado para acessar o app
      </Text>

      <TouchableOpacity
        onPress={login}
        style={styles.button}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Entrando..." : "Entrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.link}>
          Não tem conta?{" "}
          <Text style={styles.linkBold}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
