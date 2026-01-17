import { ScrollView, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieCard } from "../../components/MovieCard";
import { useFetch } from "../../hooks/useFetch";
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from "../../services/tmdb.service";

export function HomeScreen() {
  const navigation = useNavigation<any>();

  const nowPlaying = useFetch(getNowPlaying);
  const popular = useFetch(getPopular);
  const topRated = useFetch(getTopRated);
  const upcoming = useFetch(getUpcoming);

  function renderSection(title: string, data: any[] | null) {
    if (!data) return null;

    return (
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
          {title}
        </Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => navigation.navigate("Details", { movie: item })}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      {renderSection("Now Playing", nowPlaying.data)}
      {renderSection("Popular", popular.data)}
      {renderSection("Top Rated", topRated.data)}
      {renderSection("Upcoming", upcoming.data)}
    </ScrollView>
  );
}
