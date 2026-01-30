import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={isDark ? "sunny-outline" : "moon-outline"}
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.searchInput}
        />
        <Ionicons
          name="search-outline"
          size={20}
          color={theme.colors.placeholder}
        />
      </View>

      {/* HERO */}
      <MovieCarousel
        movies={popular.data ?? []}
        showRanking
        variant="hero"
      />

      {/* TABS */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab("nowPlaying")}>
          <Text
            style={[
              styles.tab,
              activeTab === "nowPlaying" && styles.activeTab,
            ]}
          >
            Now playing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("upcoming")}>
          <Text
            style={[
              styles.tab,
              activeTab === "upcoming" && styles.activeTab,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("topRated")}>
          <Text
            style={[
              styles.tab,
              activeTab === "topRated" && styles.activeTab,
            ]}
          >
            Top rated
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("popular")}>
          <Text
            style={[
              styles.tab,
              activeTab === "popular" && styles.activeTab,
            ]}
          >
            Popular
          </Text>
        </TouchableOpacity>
      </View>

      {/* LISTA DINÂMICA */}
      <MovieCarousel movies={moviesByTab[activeTab]} />
    </ScrollView>
  );
}
