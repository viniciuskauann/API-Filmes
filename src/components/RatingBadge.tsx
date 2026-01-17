import { View, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";


interface Props {
  rating: number;
}

export function RatingBadge({ rating }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: "flex-start",
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontFamily: theme.fonts.bold,
          fontSize: 12,
        }}
      >
        ⭐ {rating.toFixed(1)}
      </Text>
    </View>
  );
}
