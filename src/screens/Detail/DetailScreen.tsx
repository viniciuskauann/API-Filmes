import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { AboutTab } from "./components/AboutTab";
import { CastTab } from "./components/CastTab";
import { ReviewsTab } from "./components/ReviewsTab";
import { useFavorites } from "../../hooks/useFavorites";
import { RatingBadge } from "../../components/RatingBadge";
import { Movie } from "../../types/movie";
import { detailsStyles } from "./detailStyles";

type Params = {
  Details: { movie: Movie };
};

export function DetailsScreen() {
  const { params } = useRoute<RouteProp<Params, "Details">>();
  const { movie } = params;

  const { theme } = useTheme();
  const styles = detailsStyles(theme);

  const { isFavorite, toggleFavorite } = useFavorites(movie.id);
  const [tab, setTab] = useState<"about" | "reviews" | "cast">("about");

  return (
    <View style={styles.container}>
      {/* Banner */}
      <Image source={{ uri: movie.backdropPath }} style={styles.banner} />

      {/* Conteúdo fixo */}
      <View style={styles.header}>
        <Image source={{ uri: movie.posterPath }} style={styles.poster} />

        <View style={styles.headerInfo}>
          <Text style={styles.title}>{movie.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{movie.year}</Text>
            <Text style={styles.metaText}>•</Text>
            <Text style={styles.metaText}>{movie.runtime} min</Text>
            <Text style={styles.metaText}>•</Text>
            <Text style={styles.metaText}>{movie.genre}</Text>
          </View>

          <RatingBadge rating={movie.rating} />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["about", "reviews", "cast"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setTab(item as any)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabText,
                tab === item && styles.tabTextActive,
              ]}
            >
              {item === "about"
                ? "About Movie"
                : item === "reviews"
                ? "Reviews"
                : "Cast"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conteúdo das abas (BLINDADO) */}
      <View style={styles.tabContent}>
        {tab === "about" && (
          <AboutTab key="about" overview={movie.overview} />
        )}

        {tab === "reviews" && (
          <ReviewsTab key="reviews" movieId={movie.id} />
        )}

        {tab === "cast" && (
          <CastTab key="cast" movieId={movie.id} />
        )}
      </View>

      {/* Favorito */}
      <TouchableOpacity
        onPress={() => toggleFavorite(movie)}
        style={[
          styles.favoriteButton,
          isFavorite && styles.favoriteButtonActive,
        ]}
      >
        <Text
          style={[
            styles.favoriteText,
            isFavorite && styles.favoriteTextActive,
          ]}
        >
          {isFavorite ? "Remove from Watchlist" : "Add to Watchlist"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
