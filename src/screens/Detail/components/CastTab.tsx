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
  if (!cast.length)
    return <EmptyState message="Elenco não disponível." />;

  return (
    <FlatList
      data={cast}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      key="cast-3-cols"
      renderItem={({ item }) => (
        <View style={{ flex: 1, alignItems: "center", marginBottom: 20 }}>
          {item.profile_path && (
            <Image
              source={{
                uri: `${TMDB.IMAGE_URL}${item.profile_path}`,
              }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 45,
                marginBottom: 8,
              }}
            />
          )}

          <Text
            style={{
              color: theme.colors.text,
              fontSize: 13,
              fontFamily: theme.fonts.semiBold,
              textAlign: "center",
            }}
            numberOfLines={2}
          >
            {item.name}
          </Text>
        </View>
      )}
    />
  );
}
