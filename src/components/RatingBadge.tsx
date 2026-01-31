import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function RatingBadge({ rating }: { rating: number }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000000CC",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
      }}
    >
      <Ionicons name="star" size={14} color="#FFD700" />
      <Text
        style={{
          color: "#FFF",
          marginLeft: 6,
          fontWeight: "bold",
          fontSize: 13,
        }}
      >
        {rating.toFixed(1)}
      </Text>
    </View>
  );
}
