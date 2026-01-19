import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 12,
    },
  });
