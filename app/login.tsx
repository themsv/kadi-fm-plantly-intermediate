import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { router } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

function Login() {
  const toggleLogin = useUserStore((state) => state.toggleLogin);
  const handlePress = () => {
    toggleLogin();
    router.replace("/");
  };
  return (
    <View style={styles.contaier}>
      <Text>I am Login Screen</Text>
      <Button title="Login" onPress={handlePress} />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
