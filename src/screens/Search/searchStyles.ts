import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const searchStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 48,
      marginBottom: 16,
    },

    headerTitle: {
      fontSize: 18,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
    },

    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      borderRadius: 14,
      paddingHorizontal: 12,
      height: 44,
      marginBottom: 24,
    },

    input: {
      flex: 1,
      marginLeft: 8,
      color: theme.colors.text,
      fontFamily: theme.fonts.regular,
    },

    card: {
      flexDirection: "row",
      marginBottom: 20,
    },

    poster: {
      width: 95,
      height: 140,
      borderRadius: 12,
    },

    cardContent: {
      flex: 1,
      marginLeft: 14,
      justifyContent: "space-between",
    },

    movieTitle: {
      fontSize: 16,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
    },

    ratingRow: {
      marginVertical: 6,
    },

    metaRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    metaText: {
      marginLeft: 6,
      fontSize: 13,
      color: theme.colors.textSecondary,
    },

    emptyContainer: {
      alignItems: "center",
      marginTop: 60,
    },

    emptyImage: {
      width: 120,
      height: 120,
      marginBottom: 20,
    },

    emptyTitle: {
      fontSize: 16,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      textAlign: "center",
      marginBottom: 8,
    },

    emptySubtitle: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: "center",
      lineHeight: 20,
    },
  });
