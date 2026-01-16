import { View, Text, FlatList, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/movie";
import { MovieCard } from "../components/MovieCard";

const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    posterPath: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    releaseDate: "2014-11-07",
    overview: "A team travels through a wormhole in space."
  },
  {
    id: 2,
    title: "The Batman",
    posterPath: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 8.1,
    releaseDate: "2022-03-04",
    overview: "Batman ventures into Gotham's underworld."
  }
];

export function HomeScreen() {
  const navigation = useNavigation<any>();

  const renderSection = (title: string) => (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
        {title}
      </Text>
      <FlatList
        data={MOCK_MOVIES}
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

  return (
    <ScrollView style={{ padding: 16 }}>
      {renderSection("Now Playing")}
      {renderSection("Popular")}
      {renderSection("Top Rated")}
      {renderSection("Upcoming")}
    </ScrollView>
  );
}
