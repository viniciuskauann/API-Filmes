import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onPress: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: movie.posterPath }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {movie.title}
      </Text>
      <Text style={styles.rating}>⭐ {movie.rating}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: 140, marginRight: 12 },
  image: { width: "100%", height: 200, borderRadius: 8 },
  title: { fontSize: 14, fontWeight: "600", marginTop: 6 },
  rating: { fontSize: 12, opacity: 0.7 },
});
