import { View, Text } from "react-native";
import { useTheme } from "../../../context/ThemeContext";


export function CastTab() {
  const { theme } = useTheme();

  return (
    <View>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontFamily: theme.fonts.regular,
        }}
      >
        Elenco será carregado a partir da API TMDB.
      </Text>
    </View>
  );
}
