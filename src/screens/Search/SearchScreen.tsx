import { View, TextInput, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../types/movie";
import { searchMovies } from "../../services/tmdb.service";
import { useTheme } from "../../context/ThemeContext";
import { searchStyles } from "./searchStyles";

export function SearchScreen() {
  const { theme } = useTheme();
  const styles = searchStyles(theme);

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    if (query.trim().length < 3) {
      setMovies([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        setLoading(true);
        const result = await searchMovies(query);
        setMovies(result);
      } catch (error) {
        console.log("Erro ao buscar filmes", error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar filmes..."
        placeholderTextColor={theme.colors.textSecondary}
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      {loading && (
        <Text style={styles.loadingText}>Buscando...</Text>
      )}

      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate("Details", { movie: item })
            }
          />
        )}
      />
    </View>
  );
}
