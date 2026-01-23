import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
import { Ionicons } from "@expo/vector-icons";
import { lightTheme } from "@/src/theme/light";
import { fonts } from "@/src/theme/fonts";
import { darkTheme } from "@/src/theme/dark";




export const themes = {
  light: {
    ...lightTheme,
    fonts,
    colors: {
      ...lightTheme.colors,
      placeholder: "#888888",
    },
  },
  dark: {
    ...darkTheme,
    fonts,
    colors: {
      ...darkTheme.colors,
      placeholder: "#888888",
    },
  },
};


export function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const styles = homeStyles(theme);

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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>What do you want to watch?</Text>

        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={theme.dark ? "sunny-outline" : "moon-outline"}
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

      {/* HERO CAROUSEL */}
      <MovieCarousel
        movies={popular.data ?? []}
        showRanking
        large
      />

      {/* CATEGORY TABS */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Now playing</Text>
        <Text style={styles.tab}>Upcoming</Text>
        <Text style={styles.tab}>Top rated</Text>
        <Text style={styles.tab}>Popular</Text>
      </View>

      {/* GRID / LIST */}
      <MovieCarousel movies={nowPlaying.data ?? []} />
    </ScrollView>
  );
}
