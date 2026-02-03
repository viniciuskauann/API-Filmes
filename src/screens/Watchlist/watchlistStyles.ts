import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const watchlistStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    /* 🔝 HEADER */
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      justifyContent: "space-between",
    },

    headerTitle: {
      fontSize: 18,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
    },

    /* 📭 EMPTY STATE */
    emptyContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
    },

    emptyImage: {
      width: 140,
      height: 140,
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
      color: theme.colors.textSecondary,
      textAlign: "center",
      lineHeight: 20,
    },

    /* 🎞️ LISTA */
    list: {
      paddingHorizontal: 16,
      paddingBottom: 24,
    },
  });
