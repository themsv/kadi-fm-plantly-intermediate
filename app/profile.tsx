import { Text, View, StyleSheet } from "react-native";
import { theme } from "../theme";

function Profile() {
  return (
    <View style={styles.container}>
      <Text> I am Profile</Text>
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
