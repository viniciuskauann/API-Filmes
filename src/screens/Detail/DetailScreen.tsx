import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Movie } from "../../types/movie";
import { RouteProp, useRoute } from "@react-navigation/native";

type Params = {
  Details: { movie: Movie };
};

export function DetailsScreen() {
  const { params } = useRoute<RouteProp<Params, "Details">>();
  const { movie } = params;
  const [tab, setTab] = useState<"about" | "cast" | "reviews">("about");

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: movie.posterPath }} style={{ height: 300 }} />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>{movie.title}</Text>
        <Text style={{ opacity: 0.7 }}>⭐ {movie.rating}</Text>

        {/* Tabs */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          {["about", "cast", "reviews"].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setTab(item as any)}
              style={{ marginRight: 16 }}
            >
              <Text style={{ fontWeight: tab === item ? "700" : "400" }}>
                {item.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Conteúdo */}
        <View style={{ marginTop: 16 }}>
          {tab === "about" && <Text>{movie.overview}</Text>}
          {tab === "cast" && <Text>Elenco virá da API</Text>}
          {tab === "reviews" && <Text>Avaliações virão da API</Text>}
        </View>
      </View>
    </View>
  );
}
