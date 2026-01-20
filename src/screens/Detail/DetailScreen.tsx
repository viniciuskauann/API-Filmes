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
  const [tab, setTab] = useState<"about" | "cast" | "reviews">("about");

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.posterPath }} style={styles.poster} />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <RatingBadge rating={movie.rating} />

        {/* Tabs */}
        <View style={styles.tabs}>
          {["about", "cast", "reviews"].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setTab(item as any)}
              style={styles.tabButton}
            >
              <Text
                style={[styles.tabText, tab === item && styles.tabTextActive]}
              >
                {item.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Conteúdo */}
        {tab === "about" && <AboutTab overview={movie.overview} />}
        {tab === "cast" && <CastTab movieId={movie.id} />}
        {tab === "reviews" && <ReviewsTab movieId={movie.id} />}

        {/* Favorito */}
        <TouchableOpacity
          onPress={() => toggleFavorite(movie)}
          style={[
            styles.favoriteButton,
            {
              backgroundColor: isFavorite
                ? theme.colors.primary
                : theme.colors.surface,
            },
          ]}
        >
          <Text
            style={[
              styles.favoriteText,
              {
                color: isFavorite ? "#FFF" : theme.colors.text,
              },
            ]}
          >
            {isFavorite ? "Remover da Watchlist" : "Adicionar à Watchlist"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
