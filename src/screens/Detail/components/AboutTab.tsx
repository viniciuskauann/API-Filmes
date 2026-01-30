import { ScrollView, Text } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

interface Props {
  overview: string;
}

export function AboutTab({ overview }: Props) {
  const { theme } = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text
        style={{
          color: theme.colors.text,
          fontFamily: theme.fonts.regular,
          lineHeight: 22,
        }}
      >
      
        {overview || "Descrição não disponível."}
      </Text>
    </ScrollView>
  );
}
