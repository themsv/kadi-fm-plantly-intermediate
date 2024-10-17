import { theme } from "@/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import * as Haptics from "expo-haptics";

type CustomButtonProps = {
  onPress: () => void;
  title: string;
};

function CustomButton({ onPress, title }: CustomButtonProps) {
  const handlePress = () => {
    onPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={(state) =>
        state.pressed ? [styles.button, styles.buttonPressed] : styles.button
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.green,
  },
  buttonPressed: {
    backgroundColor: theme.colors.leafyGreen,
  },
});
