import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

function Profile() {
  const toggleLogin = useUserStore((state) => state.toggleLogin);
  return (
    <View style={styles.container}>
      <Text> I am Profile</Text>
      <Button title="Logout" onPress={toggleLogin} />
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
