import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
    },

    header: {
      marginTop: 12,
      marginBottom: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    title: {
      fontSize: 22,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      maxWidth: "80%",
    },

    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      paddingHorizontal: 16,
      height: 48,
      marginBottom: 24,
    },

    searchInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 16,
    },

    tabs: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 20,
    },

    tab: {
      fontSize: 14,
      color: theme.colors.placeholder,
      fontFamily: theme.fonts.medium,
    },

    activeTab: {
      color: theme.colors.primary,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
      paddingBottom: 6,
    },
  });
