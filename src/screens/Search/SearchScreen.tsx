import { View, TextInput, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../types/movie";
import { searchMovies } from "../../services/tmdb.service";


export function SearchScreen() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const delay = setTimeout(async () => {
      const result = await searchMovies(query);
      setMovies(result);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Buscar filmes..."
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
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
