import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";;
import * as SecureStore from "expo-secure-store";
import { registerStyles } from "./registerStyles";

export function RegisterScreen() {
  const { theme } = useTheme();
  const styles = registerStyles(theme);
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (!name || !email || !password) return;

    // 🔐 Cadastro mock
    await SecureStore.setItemAsync(
      "user",
      JSON.stringify({ name, email })
    );

    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Sign up to start exploring movies
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.link}>
          Already have an account?{" "}
          <Text style={styles.linkBold}>Login</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
