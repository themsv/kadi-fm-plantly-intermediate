import { theme } from "@/theme";
import { Text, View, StyleSheet } from "react-native";

function Login() {
  return (
    <View style={styles.contaier}>
      <Text>I am Login Screen</Text>
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
