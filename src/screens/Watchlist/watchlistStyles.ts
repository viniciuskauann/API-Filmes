import { StyleSheet } from "react-native";

export const watchlistStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.colors.text,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 40,
    },

    cardContent: {
      margin: 12,
      flex: 1,
      flexDirection: "row",
      marginLeft: 14,
      justifyContent: "space-between",
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


    movieTitle: {
      fontSize: 16,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
    },

    emptyImage: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    emptyTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.text,
      marginBottom: 8,
      textAlign: "center",
    },
    emptySubtitle: {
      fontSize: 14,
      color: theme.colors.textSecondary || "#9CA3AF",
      textAlign: "center",
      lineHeight: 20,
    },
  });
