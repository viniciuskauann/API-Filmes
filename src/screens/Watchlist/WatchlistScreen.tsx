import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieCard } from "../../components/MovieCard";
import { useFavorites } from "../../context/FavoritesContext";
import { watchlistStyles } from "./watchlistStyles";
import { useTheme } from "../../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export function WatchlistScreen() {
  const { theme } = useTheme();
  const styles = watchlistStyles(theme);
  const navigation = useNavigation<any>();

  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Watch list</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* EMPTY */}
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require("../../assets/icons/pipoca.png")}
            style={styles.emptyImage}
            resizeMode="contain"
          />

          <Text style={styles.emptyTitle}>There Is No Movie Yet!</Text>
          <Text style={styles.emptySubtitle}>
            Find your movie by Type title,{"\n"}
            categories, years, etc
          </Text>
        </View>
      ) : (
        <FlatList
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
      )}
    </SafeAreaView>
  );
}
