import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
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

import { MovieGrid } from "../../components/MovieGrid";
import { MovieCarousel } from "../../components/MovieCarousel";
import { Loading } from "../../components/Loading";
import { EmptyState } from "../../components/EmptyState";
import { useTheme } from "../../context/ThemeContext";
/* import { MovieGridItem } from "@/src/components/MovieGridItem"; */

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

  const moviesByTab: Record<TabKey, any[]> = {
    nowPlaying: nowPlaying.data ?? [],
    upcoming: upcoming.data ?? [],
    topRated: topRated.data ?? [],
    popular: popular.data ?? [],
  };

  const movies = moviesByTab[activeTab];

  if (!movies.length) {
    return <EmptyState message="Nenhum filme encontrado." />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => (
        <MovieGrid movie={item} />
      )}
      ListHeaderComponent={
        <>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>
              What do you want to watch?
            </Text>

            <View style={{ flexDirection: "row", gap: 16 }}>
              <TouchableOpacity onPress={toggleTheme}>
                <Ionicons
                  name={
                    isDark
                      ? "sunny-outline"
                      : "moon-outline"
                  }
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* SEARCH */}
          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.searchPlaceholder}>
              Search
            </Text>
            <Ionicons
              name="search-outline"
              size={20}
              color={theme.colors.placeholder}
            />
          </TouchableOpacity>

          {/* TOP 10 CAROUSEL */}
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
                onPress={() =>
                  setActiveTab(key as TabKey)
                }
              >
                <Text
                  style={[
                    styles.tab,
                    activeTab === key &&
                      styles.activeTab,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      }
    />
  );
}
