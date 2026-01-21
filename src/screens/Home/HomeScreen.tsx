import { ScrollView } from "react-native";
import { homeStyles } from "./homeStyles";
import { useFetch } from "../../hooks/useFetch";
import {getNowPlaying, getPopular, getTopRated, getUpcoming} from "../../services/tmdb.service";
import { EmptyState } from "../../components/EmptyState";
import { MovieCarousel } from "../../components/MovieCarousel";
import { useTheme } from "../../context/ThemeContext";
import { Loading } from "@/src/components/Loading";

export function HomeScreen() {
  const { theme } = useTheme();
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
    <ScrollView style={styles.container}>
      <MovieCarousel title="Now Playing" movies={nowPlaying.data ?? []} />

      <MovieCarousel title="Popular" movies={popular.data ?? []} showRanking />

      <MovieCarousel
        title="Top Rated"
        movies={topRated.data ?? []}
        showRanking
      />

      <MovieCarousel title="Upcoming" movies={upcoming.data ?? []} />
    </ScrollView>
  );
}
