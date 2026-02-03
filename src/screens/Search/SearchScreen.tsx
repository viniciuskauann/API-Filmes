import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { searchMovies } from "../../services/tmdb.service";
import { Movie } from "../../types/movie";
import { useTheme } from "../../context/ThemeContext";
import { searchStyles } from "./searchStyles";
import { RatingBadge } from "../../components/RatingBadge";

export function SearchScreen() {
  const { theme } = useTheme();
  const styles = searchStyles(theme);
  const navigation = useNavigation<any>();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

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
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search</Text>

        <Ionicons
          name="information-circle-outline"
          size={22}
          color={theme.colors.textSecondary}
        />
      </View>

      {/* SEARCH INPUT */}
      <View style={styles.searchBox}>
        <Ionicons
          name="search-outline"
          size={18}
          color={theme.colors.textSecondary}
        />
        <TextInput
          placeholder="Spiderman"
          placeholderTextColor={theme.colors.textSecondary}
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* EMPTY STATE */}
      {!loading && query.length >= 3 && movies.length === 0 && (
        <View style={styles.emptyContainer}>
          <Image
            source={require("../../assets/icons/Lupa.png")}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyTitle}>
            We Are Sorry, We Can Not Find The Movie :(
          </Text>
          <Text style={styles.emptySubtitle}>
            Find your movie by Type title,
            {"\n"}categories, years, etc
          </Text>
        </View>
      )}

      {/* LIST */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { movie: item })}
          >
            <Image source={{ uri: item.posterPath }} style={styles.poster} />

            <View style={styles.cardContent}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
              </Text>

              <View style={styles.ratingRow}>
                <RatingBadge rating={item.rating} small />
              </View>

              <View style={styles.metaRow}>
                <Ionicons
                  name="film-outline"
                  size={14}
                  color={theme.colors.textSecondary}
                />
                <Text style={styles.metaText}>Action</Text>
              </View>

              <View style={styles.metaRow}>
                <Ionicons
                  name="calendar-outline"
                  size={14}
                  color={theme.colors.textSecondary}
                />
                <Text style={styles.metaText}>
                  {item.releaseDate?.split("-")[0]}
                </Text>
              </View>

              <View style={styles.metaRow}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color={theme.colors.textSecondary}
                />
                <Text style={styles.metaText}>139 minutes</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
