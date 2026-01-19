import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";


export const loginStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 12,
    },
    subtitle: {
      color: theme.colors.textSecondary,
      marginBottom: 32,
      textAlign: "center",
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 8,
    },
    buttonText: {
      color: "#FFF",
      fontFamily: theme.fonts.bold,
    },
  });
