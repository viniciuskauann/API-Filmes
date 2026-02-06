import { AppTheme } from "@/src/theme/theme";
import { StyleSheet } from "react-native";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    listContent: {
      paddingHorizontal: 16,
      paddingBottom: 120,
      backgroundColor: theme.colors.background,
    },

    column: {
      justifyContent: "space-between",
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

    searchPlaceholder: {
      flex: 1,
      fontSize: 16,
      color: theme.colors.placeholder,
    },

    tabs: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 24,
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
