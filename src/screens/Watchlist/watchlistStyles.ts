import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const watchlistStyles = (theme: AppTheme) =>
  StyleSheet.create({
    /* Lista */
    list: {
      padding: 16,
      backgroundColor: theme.colors.background,
    },

    /* Empty State */
    emptyContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
    },

    emptyImage: {
      width: 120,
      height: 120,
      marginBottom: 24,
    },

    emptyTitle: {
      fontSize: 18,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 8,
      textAlign: "center",
    },

    emptySubtitle: {
      fontSize: 14,
      fontFamily: theme.fonts.regular,
      color: theme.colors.textSecondary,
      textAlign: "center",
      lineHeight: 20,
    },
  });
