import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { homeStyles } from "./homeStyles";
import { useFetch } from "../../hooks/useFetch";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../services/tmdb.service";
import { EmptyState } from "../../components/EmptyState";
import { MovieCarousel } from "../../components/MovieCarousel";
import { useTheme } from "../../context/ThemeContext";
import { Loading } from "../../components/Loading";




type TabKey = "nowPlaying" | "upcoming" | "topRated" | "popular";

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = homeStyles(theme);

  const [activeTab, setActiveTab] = useState<TabKey>("nowPlaying");

  const nowPlaying = useFetch(getNowPlaying);
  const popular = useFetch(getPopular);
  const topRated = useFetch(getTopRated);
  const upcoming = useFetch(getUpcoming);

  if (
    nowPlaying.loading ||
    popular.loading ||
    topRated.loading ||
    upcoming.loading
  ) {
    return <Loading />;
  }

  if (
    !nowPlaying.data?.length &&
    !popular.data?.length &&
    !topRated.data?.length &&
    !upcoming.data?.length
  ) {
    return <EmptyState message="Nenhum filme disponível no momento." />;
  }

  const moviesByTab: Record<TabKey, any[]> = {
    nowPlaying: nowPlaying.data ?? [],
    upcoming: upcoming.data ?? [],
    topRated: topRated.data ?? [],
    popular: popular.data ?? [],
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>What do you want to watch?</Text>

        <View style={{ flexDirection: "row", gap: 16 }}>
          {/* WATCHLIST */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Watchlist")}
          >
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>

          {/* THEME */}
          <TouchableOpacity onPress={toggleTheme}>
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH — BOTÃO DE BUSCA */}
      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.searchPlaceholder}>Search</Text>

        <Ionicons
          name="search-outline"
          size={20}
          color={theme.colors.placeholder}
        />
      </TouchableOpacity>

      {/* HERO */}
      <MovieCarousel
        movies={popular.data ?? []}
        showRanking
        variant="hero"
      />

      {/* TABS */}
      <View style={styles.tabs}>
        {[
          ["nowPlaying", "Now playing"],
          ["upcoming", "Upcoming"],
          ["topRated", "Top rated"],
          ["popular", "Popular"],
        ].map(([key, label]) => (
          <TouchableOpacity
            key={key}
            onPress={() => setActiveTab(key as TabKey)}
          >
            <Text
              style={[
                styles.tab,
                activeTab === key && styles.activeTab,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LISTA */}
      <MovieCarousel movies={moviesByTab[activeTab]} />
    </ScrollView>
  );
}
