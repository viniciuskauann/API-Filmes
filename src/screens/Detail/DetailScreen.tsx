import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Movie } from "../../types/movie";
import { useTheme } from "../../context/ThemeContext";
import { detailsStyles } from "./detailStyles";

import { AboutTab } from "./components/AboutTab";
import { CastTab } from "./components/CastTab";
import { ReviewsTab } from "./components/ReviewsTab";
import { RatingBadge } from "../../components/RatingBadge";
import { RateMovieScreen } from "../RateMovie/RateMovieScreen";
import { useFavorites } from "../../context/FavoritesContext";

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

  
  const { isFavorite, toggleFavorite } = useFavorites();

  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("about");
  const [showRateModal, setShowRateModal] = useState(false);

  const year = movie.releaseDate ? movie.releaseDate.split("-")[0] : "—";
  const duration = movie.runtime && movie.runtime > 0 ? `${movie.runtime} min` : "—";
  const genres = movie.genres && movie.genres.length > 0
    ? movie.genres.map((g) => g.name).join(", ")
    : "—";

  return (
    <View style={styles.container}>
      {/* BACKDROP */}
      <View style={styles.backdropWrapper}>
        <Image source={{ uri: movie.backdropPath }} style={styles.backdrop} />

        {/* HEADER ICONS */}
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => toggleFavorite(movie)}>
            <Ionicons
              name={isFavorite(movie.id) ? "bookmark" : "bookmark-outline"}
              size={22}
              color={isFavorite(movie.id) ? theme.colors.primary : "#FFF"}
            />
          </TouchableOpacity>
        </View>

        {/* RATING BADGE */}
        <View style={styles.ratingWrapper}>
          <RatingBadge rating={movie.rating} style={{backgroundColor:"#0b0b0b"}} />
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {/* HEADER INFO */}
        <View style={styles.headerInfo}>
          <Image source={{ uri: movie.posterPath }} style={styles.poster} />

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.meta}>{year} • {duration}</Text>
            <Text style={styles.meta}>{genres}</Text>

            {/* RATE BUTTON */}
            <TouchableOpacity style={styles.rateButton} onPress={() => setShowRateModal(true)}>
              <Ionicons name="star-outline" size={16} color={theme.colors.primary} />
              <Text style={styles.rateText}>Rate this movie</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabButton, activeTab === tab && styles.tabActive]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TAB CONTENT */}
        {activeTab === "about" && <AboutTab overview={movie.overview} />}
        {activeTab === "cast" && <CastTab movieId={movie.id} />}
        {activeTab === "reviews" && <ReviewsTab movieId={movie.id} />}
      </View>

      {/* ⭐ RATE MOVIE MODAL */}
      <RateMovieScreen
        visible={showRateModal}
        onClose={() => setShowRateModal(false)}
        onConfirm={(rating) => {
          console.log("User rated:", rating);
          // Aqui você pode salvar no backend / storage
        }}
      />
    </View>
  );
}
