import { FlatList, Image, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { useMovieCast } from "../../../hooks/useMovieCast";
import { Loading } from "../../../components/Loading";
import { TMDB } from "../../../utils/constants";
import { EmptyState } from "../../../components/EmptyState";

interface Props {
  movieId: number;
}

export function CastTab({ movieId }: Props) {
  const { theme } = useTheme();
  const { cast, loading } = useMovieCast(movieId);

  if (loading) return <Loading />;
  if (!cast.length) return <EmptyState message="Elenco não disponível." />;

  return (
    <FlatList
      data={cast}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Image
            source={{ uri: `${TMDB.IMAGE_URL}${item.profile_path}` }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45, // 🔴 círculo perfeito
              alignSelf: "center",
              marginBottom: 8,
            }}
          />

          <Text
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.semiBold,
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            {item.character}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
