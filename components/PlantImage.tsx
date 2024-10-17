import { Image, useWindowDimensions } from "react-native";

function PlantImage() {
  const { width } = useWindowDimensions();
  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: width / 1.5, height: width / 1.5 }}
    />
  );
}

export default PlantImage;
