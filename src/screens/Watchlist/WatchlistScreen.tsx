import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieCard } from "../../components/MovieCard";
import { useFavorites } from "../../hooks/useFavorites";

export function WatchlistScreen() {
  const { favorites } = useFavorites();
  const navigation = useNavigation<any>();

  if (favorites.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ opacity: 0.6 }}>
          Nenhum filme favoritado ainda
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate("Details", { movie: item })}
        />
      )}
    />
  );
}
