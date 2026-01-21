import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const registerStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 24,
      justifyContent: "center",
    },

    title: {
      fontSize: 28,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 14,
      fontFamily: theme.fonts.regular,
      color: theme.colors.textSecondary,
      marginBottom: 32,
    },

    input: {
      height: 52,
      borderRadius: 12,
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 16,
      marginBottom: 16,
      fontFamily: theme.fonts.regular,
      color: theme.colors.text,
    },

    button: {
      height: 52,
      borderRadius: 12,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
      marginBottom: 24,
    },

    buttonText: {
      color: "#FFF",
      fontFamily: theme.fonts.bold,
      fontSize: 16,
    },

    link: {
      textAlign: "center",
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.regular,
    },

    linkBold: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.bold,
    },
  });
