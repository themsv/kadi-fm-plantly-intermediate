import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import CustomButton from "@/components/CustomButton";

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
        theme.colors.appleGreen,
        theme.colors.limeGreen,
        theme.colors.green,
      ]}
    >
      <Text>I am Login Screen</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
