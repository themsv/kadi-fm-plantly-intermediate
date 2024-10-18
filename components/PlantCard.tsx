import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import PlantImage from "./PlantImage";
import { PlantType } from "@/store/plantsStore";
import { Link } from "expo-router";

function PlantCard({ plant }: { plant: PlantType }) {
  return (
    <Link href={`plants/${plant.id}`} asChild>
      <Pressable>
        <View style={styles.plantCard}>
          <PlantImage size={100} imageUri={plant.imageUri} />
          <View style={styles.details}>
            <Text style={styles.plantName}>{plant.name}</Text>
            <Text style={styles.subtitle}>
              Water every {plant.wateringFrequencyDays} days
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
export default PlantCard;

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    shadowColor: theme.colors.black,
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colors.grey,
  },
});
