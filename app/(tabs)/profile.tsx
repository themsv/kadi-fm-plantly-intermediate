import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import CustomButton from "@/components/CustomButton";

function Profile() {
  const toggleLogin = useUserStore((state) => state.toggleLogin);
  return (
    <View style={styles.container}>
      <Text> I am Profile</Text>
      <CustomButton title="Logout" onPress={toggleLogin} />
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
