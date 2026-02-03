import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RatingBadgeProps {
  rating: number;
  small?: boolean; // 👈 agora existe
}

export function RatingBadge({ rating, small = false }: RatingBadgeProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000000CC",
        paddingHorizontal: small ? 8 : 10,
        paddingVertical: small ? 4 : 6,
        borderRadius: 20,
      }}
    >
      <Ionicons
        name="star"
        size={small ? 12 : 14}
        color="#FFD700"
      />

      <Text
        style={{
          color: "#FFF",
          marginLeft: 6,
          fontWeight: "bold",
          fontSize: small ? 12 : 13,
        }}
      >
        {rating.toFixed(1)}
      </Text>
    </View>
  );
}
