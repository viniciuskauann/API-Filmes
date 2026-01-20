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
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginBottom: 16 }}>
          {item.profile_path && (
            <Image
              source={{
                uri: `${TMDB.IMAGE_URL}${item.profile_path}`,
              }}
              style={{
                width: "100%",
                height: 180,
                borderRadius: 8,
              }}
            />
          )}

          <Text
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.semiBold,
              marginTop: 6,
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: 12,
            }}
          >
            {item.character}
          </Text>
        </View>
      )}
    />
  );
}
