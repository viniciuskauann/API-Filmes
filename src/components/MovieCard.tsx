import { View, Text, Image, TouchableOpacity } from "react-native";
import { RatingBadge } from "./RatingBadge";
import { useTheme } from "@/src/context/ThemeContext";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onPress: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: 140,
        marginRight: 12,
      }}
    >
      {/* Wrapper RELATIVO */}
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: movie.posterPath }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
          }}
        />

        {/* ⭐ RATING — NA FRENTE */}
        <View
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,       // iOS
            elevation: 10,    // Android
          }}
        >
          <RatingBadge rating={movie.rating} />
        </View>
      </View>

      <Text
        numberOfLines={2}
        style={{
          marginTop: 8,
          fontFamily: theme.fonts.semiBold,
          color: theme.colors.text,
          fontSize: 14,
        }}
      >
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}
