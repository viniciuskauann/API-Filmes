import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MovieCard } from "../../components/MovieCard";
import { useFavorites } from "../../context/FavoritesContext";
import { watchlistStyles } from "./watchlistStyles";
import { useTheme } from "../../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RatingBadge } from "@/src/components/RatingBadge";

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
          <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
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

          <Text style={styles.emptyTitle}>Ainda não há filme!</Text>
          <Text style={styles.emptySubtitle}>
            Encontre seu filme digitando o título.{"\n"}
            categoria, ano, etc
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <View style={styles.cardContent}>
              <MovieCard
                movie={item}
                onPress={() => navigation.navigate("Details", { movie: item })}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 14,
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.movieTitle} numberOfLines={2}>
                  {item.title}
                </Text>

                <View style={styles.ratingRow}>
                  <RatingBadge rating={item.rating} small />
                </View>

                <View style={styles.metaRow}>
                  <Ionicons
                    name="film-outline"
                    size={14}
                    color={theme.colors.textSecondary}
                  />
                  <Text style={styles.metaText}>Ação</Text>
                </View>

                <View style={styles.metaRow}>
                  <Ionicons
                    name="calendar-outline"
                    size={14}
                    color={theme.colors.textSecondary}
                  />
                  <Text style={styles.metaText}>
                    {item.releaseDate?.split("-")[0]}
                  </Text>
                </View>

                <View style={styles.metaRow}>
                  <Ionicons
                    name="time-outline"
                    size={14}
                    color={theme.colors.textSecondary}
                  />
                  <Text style={styles.metaText}>139 minutos</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
