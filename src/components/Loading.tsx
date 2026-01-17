import { ActivityIndicator, View } from "react-native";
import { useTheme } from "../context/ThemeContext";


export function Loading() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
