import { FlatList, View, Text } from "react-native";
import { MovieCard } from "./MovieCard";
import { useTheme } from "@/src/context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/movie";

interface Props {
  title: string;
  movies: Movie[];
  showRanking?: boolean;
}

export function MovieCarousel({
  title,
  movies,
  showRanking = false,
}: Props) {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  if (!movies || movies.length === 0) return null;

  return (
    <View style={{ marginBottom: 32 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: theme.fonts.bold,
          color: theme.colors.text,
          marginBottom: 16,
        }}
      >
        {title}
      </Text>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 24 }}>
            {showRanking && (
              <Text
                style={{
                  position: "absolute",
                  left: -12,
                  bottom: -12,
                  fontSize: 120,
                  fontFamily: theme.fonts.bold,
                  color: theme.colors.primary,
                  opacity: 0.25,
                  zIndex: 0,
                }}
              >
                {index + 1}
              </Text>
            )}

            <MovieCard
              movie={item}
              onPress={() =>
                navigation.navigate("Details", { movie: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}
