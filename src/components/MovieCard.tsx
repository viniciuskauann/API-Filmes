import { View, Text, Image, TouchableOpacity } from "react-native";
import { RatingBadge } from "./RatingBadge";
import { Movie } from "../types/movie";
import { useTheme } from "../context/ThemeContext";

interface Props {
  movie: Movie;
  onPress: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 140,
        marginRight: 12,
      }}
      activeOpacity={0.8}
    >
      <View>
        <Image
          source={{ uri: movie.posterPath }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 8,
          }}
        />

        {/* Rating */}
        <View
          style={{
            position: "absolute",
            top: 8,
            right: 8,
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
