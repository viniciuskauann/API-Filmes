import { View, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";


interface Props {
  message: string;
}

export function EmptyState({ message }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontFamily: theme.fonts.regular,
          textAlign: "center",
        }}
      >
        {message}
      </Text>
    </View>
  );
}
