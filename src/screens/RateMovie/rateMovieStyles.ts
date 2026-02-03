import { StyleSheet, Dimensions } from "react-native";
import { AppTheme } from "../../theme/theme";

const { height } = Dimensions.get("window");

export const rateMovieStyles = (theme: AppTheme) =>
  StyleSheet.create({
    backdrop: {
      ...StyleSheet.absoluteFillObject,
    },

    sheet: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 24,
      paddingBottom: 32,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },

    title: {
      fontSize: 16,
      fontFamily: theme.fonts.medium,
      color: theme.colors.textSecondary,
    },

    ratingText: {
      fontSize: 40,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      textAlign: "center",
      marginBottom: 16,
    },

    button: {
      marginTop: 24,
      backgroundColor: "#0A84FF",
      paddingVertical: 14,
      borderRadius: 24,
      alignItems: "center",
      width: "50%",
      alignSelf: "center",
    },

    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontFamily: theme.fonts.bold,
    },
  });
