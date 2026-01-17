import { FlatList, View, Text } from "react-native";
import { MovieCard } from "./MovieCard";

import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/movie";
import { useTheme } from "../context/ThemeContext";

interface Props {
  title: string;
  movies: Movie[];
}

export function MovieCarousel({ title, movies }: Props) {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  if (!movies || movies.length === 0) return null;

  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: theme.fonts.bold,
          color: theme.colors.text,
          marginBottom: 12,
        }}
      >
        {title}
      </Text>

      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate("Details", { movie: item })}
          />
        )}
      />
    </View>
  );
}
