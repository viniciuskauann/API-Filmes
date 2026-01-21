import { FlatList, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieCard } from "../../components/MovieCard";
import { useFavorites } from "../../hooks/useFavorites";
import { watchlistStyles } from "./watchlistStyles";
import { useTheme } from "../../context/ThemeContext";

export function WatchlistScreen() {
  const { theme } = useTheme();
  const styles = watchlistStyles(theme);

  const { favorites } = useFavorites();
  const navigation = useNavigation<any>();

  /* 📭 EMPTY STATE */
  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Image
          source={require("../../assets/icons/pipoca.png")}
          style={styles.emptyImage}
          resizeMode="contain"
        />

        <Text style={styles.emptyTitle}>
          There Is No Movie Yet!
        </Text>

        <Text style={styles.emptySubtitle}>
          Find your movie by Type title,{"\n"}
          categories, years, etc
        </Text>
      </View>
    );
  }

  /* 🎞️ LISTA DE FAVORITOS */
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() =>
            navigation.navigate("Details", { movie: item })
          }
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
