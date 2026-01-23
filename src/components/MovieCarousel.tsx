import { FlatList, View, Text, StyleSheet } from "react-native";
import { MovieCard } from "./MovieCard";
import { useTheme } from "@/src/context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/movie";

interface Props {
  title?: string;
  movies: Movie[];
  showRanking?: boolean;
}

export function MovieCarousel({
  title,
  movies,
  showRanking = false,
}: Props) {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();
  const styles = createStyles(theme);

  if (!movies || movies.length === 0) return null;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: showRanking ? 24 : 0 }}
        renderItem={({ item, index }) => (
          <View style={styles.itemWrapper}>
            {showRanking && (
              <Text style={styles.rankingNumber}>
                {index + 1}
              </Text>
            )}

            <MovieCard
              movie={item}
              onPress={() =>
                navigation.navigate("Details", { movie: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginBottom: 32,
    },

    title: {
      fontSize: 18,
      fontFamily: theme.fonts.bold,
      color: theme.colors.text,
      marginBottom: 16,
      paddingHorizontal: 16,
    },

    itemWrapper: {
      marginRight: 24,
      position: "relative",
      justifyContent: "flex-end",
    },

    rankingNumber: {
      position: "absolute",
      left: -22,
      bottom: -18,
      fontSize: 120,
      fontFamily: theme.fonts.bold,
      color: theme.colors.primary,
      opacity: 0.35,

      // 🔥 garante que fique NA FRENTE
      zIndex: 10,
      elevation: 10,
    },
  });

