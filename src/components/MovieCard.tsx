import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Movie } from "../types/movie";
import { useNavigation } from "@react-navigation/native";

type Props = {
  movie: Movie;
  variant?: "default" | "hero";
  ranking?: number;
};

export function MovieCard({
  movie,
  variant = "default",
  ranking,
}: Props) {
  const navigation = useNavigation<any>();
  const isHero = variant === "hero";

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("Details", { movie })
      }
    >
      <Image
        source={{ uri: movie.posterPath }}
        style={[
          styles.poster,
          isHero && styles.heroPoster,
        ]}
      />

      {ranking && (
        <Text style={styles.ranking}>{ranking}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: 120,
    height: 180,
    borderRadius: 14,
  },

  heroPoster: {
    width: "100%",
    height: 260, // ✅ ALTURA CORRETA (ANTES ESTAVA GIGANTE)
    borderRadius: 20,
  },

  ranking: {
    position: "absolute",
    bottom: -10,
    left: -4,
    fontSize: 96,
    fontWeight: "900",
    color: "rgba(255,255,255,0.15)",
  },
});
