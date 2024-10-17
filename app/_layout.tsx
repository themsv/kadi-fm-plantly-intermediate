import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}

export default RootLayout;
