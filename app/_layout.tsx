import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new-plant"
        options={{
          presentation: "modal",
          animation: "fade",
          title: "New Plant",
        }}
      />
    </Stack>
  );
}

export default RootLayout;
