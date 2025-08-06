import { Image, Text, View } from "react-native";

export function AppHeader() {
  return (
    <View className="w-full h-12 pt-1 items-center">
      <Image
        style={{ height: 40, width: 128 }}
        source={require("@/assets/images/pokemon-logo.png")}
      />
    </View>
  );
}
