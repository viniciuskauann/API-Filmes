import { ScrollView, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { useMovieReviews } from "../../../hooks/useMovieReviews";
import { Loading } from "../../../components/Loading";
import { EmptyState } from "../../../components/EmptyState";

interface Props {
  movieId: number;
}

export function ReviewsTab({ movieId }: Props) {
  const { theme } = useTheme();
  const { reviews, loading } = useMovieReviews(movieId);

  if (loading) return <Loading />;
  if (!reviews.length)
    return <EmptyState message="Nenhuma avaliação encontrada." />;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {reviews.map((review) => (
        <View
          key={review.id}
          style={{
            marginBottom: 20,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.border,
          }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.bold,
              color: theme.colors.text,
              marginBottom: 6,
            }}
          >
            {review.author}
          </Text>

          <Text
            style={{
              color: theme.colors.textSecondary,
              lineHeight: 20,
            }}
          >
            {review.content}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
