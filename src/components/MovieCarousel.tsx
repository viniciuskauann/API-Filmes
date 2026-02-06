import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";

const { width } = Dimensions.get("window");

type Props = {
  movies: Movie[];
  variant?: "default" | "hero";
  showRanking?: boolean;
};

export function MovieCarousel({
  movies,
  variant = "default",
}: Props) {
  const isHero = variant === "hero";

  return (
    <FlatList
      data={movies}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        paddingVertical: isHero ? 8 : 0,
      }}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.cardWrapper,
            isHero && styles.heroWrapper,
          ]}
        >
          <MovieCard
            movie={item}
            variant={variant}
            ranking={isHero ? index + 1 : undefined}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 12,
  },

  heroWrapper: {
    width: width * 0.6, // 🔥 CONTROLE REAL DO TAMANHO
  },
});
