import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";


export const detailsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    poster: {
      width: "100%",
      height: 320,
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 4,
    },
    rating: {
      color: theme.colors.textSecondary,
      marginBottom: 12,
    },
    tabs: {
      flexDirection: "row",
      marginTop: 16,
      marginBottom: 16,
    },
    tabButton: {
      marginRight: 16,
    },
    tabText: {
      fontFamily: theme.fonts.medium,
      color: theme.colors.textSecondary,
    },
    tabTextActive: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.bold,
    },
    favoriteButton: {
      marginTop: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    favoriteText: {
      fontFamily: theme.fonts.bold,
    },
  });
