import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Movie } from "../../types/movie";
import { useTheme } from "../../context/ThemeContext";
import { useFavorites } from "../../hooks/useFavorites";
import { detailsStyles } from "./detailStyles";

import { AboutTab } from "./components/AboutTab";
import { CastTab } from "./components/CastTab";
import { ReviewsTab } from "./components/ReviewsTab";
import { RatingBadge } from "../../components/RatingBadge";

type Params = {
  Details: { movie: Movie };
};

const TABS = ["about", "cast", "reviews"] as const;

export function DetailsScreen() {
  const { params } = useRoute<RouteProp<Params, "Details">>();
  const navigation = useNavigation<any>();
  const { movie } = params;

  const { theme } = useTheme();
  const styles = detailsStyles(theme);

  const { isFavorite, toggleFavorite } = useFavorites(movie.id);
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("about");

  const year = movie.releaseDate
    ? movie.releaseDate.split("-")[0]
    : "—";

  const duration =
    movie.runtime && movie.runtime > 0
      ? `${movie.runtime} min`
      : "—";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.map((g) => g.name).join(", ")
      : "—";

  return (
    <View style={styles.container}>
      {/* BACKDROP */}
      <View style={styles.backdropWrapper}>
        <Image
          source={{ uri: movie.backdropPath }}
          style={styles.backdrop}
        />

        {/* HEADER ICONS */}
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => toggleFavorite(movie)}
          >
            <Ionicons
              name={isFavorite ? "bookmark" : "bookmark-outline"}
              size={22}
              color={isFavorite ? theme.colors.primary : "#FFF"}
            />
          </TouchableOpacity>
        </View>

        {/* RATING */}
        <View style={styles.ratingWrapper}>
          <RatingBadge rating={movie.rating} />
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.headerInfo}>
          <Image
            source={{ uri: movie.posterPath }}
            style={styles.poster}
          />

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{movie.title}</Text>

            <Text style={styles.meta}>
              {year} • {duration}
            </Text>

            <Text style={styles.meta}>{genres}</Text>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.tabActive,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TAB CONTENT (SEM ScrollView pai) */}
        {activeTab === "about" && (
          <AboutTab overview={movie.overview} />
        )}

        {activeTab === "cast" && (
          <CastTab movieId={movie.id} />
        )}

        {activeTab === "reviews" && (
          <ReviewsTab movieId={movie.id} />
        )}
      </View>
    </View>
  );
}
