import CustomButton from "@/components/CustomButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

function Login() {
  const toggleLogin = useUserStore((state) => state.toggleLogin);
  const handlePress = () => {
    toggleLogin();
    router.replace("/");
  };
  return (
    <View style={styles.contaier}>
      <Text>I am Login Screen</Text>
      <CustomButton onPress={handlePress} title="Login" />
    </View>
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
