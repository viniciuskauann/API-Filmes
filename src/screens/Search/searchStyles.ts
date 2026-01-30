import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";


export const searchStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    input: {
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      padding: 12,
      color: theme.colors.text,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 16,
    },

     loadingText: {
      color: theme.colors.textSecondary,
      marginBottom: 12,
    },
    
    emptyText: {
      textAlign: "center",
      marginTop: 32,
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.regular,
    },
  });
