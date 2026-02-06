import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Movie } from "../types/movie";
import { useNavigation } from "@react-navigation/native";

type Props = {
  movie: Movie;
};

export function MovieGrid({ movie }: Props) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Details", { movie })
      }
    >
      <Image
        source={{ uri: movie.posterPath }}
        style={styles.poster}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "32%",
    marginBottom: 16,
  },
  poster: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
});
