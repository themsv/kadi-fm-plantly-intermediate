import { Image, useWindowDimensions } from "react-native";

type PlantImageProps = {
  size?: number;
  imageUri?: string;
};

function PlantImage({ size, imageUri }: PlantImageProps) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{ width: imageSize / 1.5, height: imageSize / 1.5 }}
    />
  );
}

export default PlantImage;
