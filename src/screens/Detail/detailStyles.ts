import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const detailsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    banner: {
      width: "100%",
      height: 220,
    },

    header: {
      flexDirection: "row",
      padding: 16,
      marginTop: -60,
    },

    poster: {
      width: 110,
      height: 160,
      borderRadius: 12,
    },

    headerInfo: {
      flex: 1,
      marginLeft: 16,
      justifyContent: "flex-end",
    },

    title: {
      fontSize: 20,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 8,
    },

    metaRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginBottom: 10,
    },

    metaText: {
      color: theme.colors.textSecondary,
      fontSize: 12,
    },

    tabs: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },

    tabButton: {
      paddingVertical: 12,
    },

    tabText: {
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.medium,
    },

    tabTextActive: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.bold,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
      paddingBottom: 6,
    },

    tabContent: {
      flex: 1,
      padding: 16,
    },

    favoriteButton: {
      margin: 16,
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    favoriteButtonActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },

    favoriteText: {
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
    },

    favoriteTextActive: {
      color: "#FFF",
    },
  });
