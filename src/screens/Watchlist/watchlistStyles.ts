import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";


export const watchlistStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyText: {
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.regular,
    },
  });
