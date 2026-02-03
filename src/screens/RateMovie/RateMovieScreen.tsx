import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import { rateMovieStyles } from "./rateMovieStyles";


interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: (rating: number) => void;
}

export function RateMovieScreen({
  visible,
  onClose,
  onConfirm,
}: Props) {
  const { theme } = useTheme();
  const styles = rateMovieStyles(theme);

  const [rating, setRating] = useState(5);

  function handleConfirm() {
    onConfirm(rating);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      {/* 🔲 BACKDROP BLUR */}
      <BlurView intensity={40} style={styles.backdrop}>
        <View />
      </BlurView>

      {/* ⬆️ BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Rate this movie</Text>

          <TouchableOpacity onPress={onClose}>
            <Ionicons
              name="close"
              size={22}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* RATING */}
        <Text style={styles.ratingText}>
          {rating.toFixed(1)}
        </Text>

        {/* SLIDER */}
        <Slider
          minimumValue={0}
          maximumValue={10}
          step={0.5}
          value={rating}
          onValueChange={setRating}
          minimumTrackTintColor="#FF8F00"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#FF8F00"
        />

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleConfirm}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
