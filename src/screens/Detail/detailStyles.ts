import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const detailsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    backdropWrapper: {
      position: "relative",
    },

    backdrop: {
      width: "100%",
      height: 260,
    },

    headerActions: {
      position: "absolute",
      top: 48,
      left: 16,
      right: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      zIndex: 10,
    },

    iconButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgba(0,0,0,0.55)",
      justifyContent: "center",
      alignItems: "center",
    },

    ratingWrapper: {
      position: "absolute",
      right: 16,
      bottom: 16,
    },

    content: {
      padding: 16,
    },

    headerInfo: {
      flexDirection: "row",
      marginTop: -60,
    },

    poster: {
      width: 110,
      height: 165,
      borderRadius: 12,
    },

    titleWrapper: {
      flex: 1,
      marginLeft: 16,
      justifyContent: "flex-end",
    },

    title: {
      fontSize: 20,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 6,
    },

    meta: {
      fontSize: 13,
      color: theme.colors.textSecondary,
      lineHeight: 18,
    },

    tabs: {
      flexDirection: "row",
      marginTop: 24,
      marginBottom: 16,
    },

    tabButton: {
      marginRight: 20,
      paddingBottom: 6,
    },

    tabActive: {
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
    },

    tabText: {
      fontSize: 14,
      fontFamily: theme.fonts.medium,
      color: theme.colors.textSecondary,
    },

    tabTextActive: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.bold,
    },

    rateButton: {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  borderWidth: 1,
  borderColor: "rgba(255, 215, 0, 0.3)",
  marginTop: 10,
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 20,
  backgroundColor: "rgba(255, 215, 0, 0.12)", // dourado suave
},

rateText: {
  marginLeft: 6,
  fontSize: 13,
  fontFamily: theme.fonts.semiBold,
  color: theme.colors.primary, // dourado do app
},

  });
