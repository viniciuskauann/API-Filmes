import { View, Text } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

export function ReviewsTab() {
  const { theme } = useTheme();

  return (
    <View>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontFamily: theme.fonts.regular,
        }}
      >
        Avaliações serão carregadas a partir da API TMDB.
      </Text>
    </View>
  );
}
