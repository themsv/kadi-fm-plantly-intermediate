import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import CustomButton from "@/components/CustomButton";
import PlantImage from "@/components/PlantImage";

function Login() {
  const toggleLogin = useUserStore((state) => state.toggleLogin);
  const handlePress = () => {
    toggleLogin();
    router.replace("/");
  };
  return (
    <LinearGradient
      style={styles.contaier}
      colors={[
        theme.colors.green,
        theme.colors.appleGreen,
        theme.colors.limeGreen,
      ]}
    >
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants hydrated</Text>
      </View>
      <PlantImage />

      <CustomButton onPress={handlePress} title="Login" />

      <StatusBar style="light" />
    </LinearGradient>
  );
}

export default Login;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    gap: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  heading: {
    fontSize: 42,
    color: theme.colors.white,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: theme.colors.white,
    textAlign: "center",
  },
});
