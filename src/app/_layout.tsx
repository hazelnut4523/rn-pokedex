import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import "../global.css";
import { View } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    DungGeunMo: require("../../assets/fonts/DungGeunMo.otf"),
  });

  return (
    <SafeAreaView className="flex-1 dark:bg-black">
      <Slot />
    </SafeAreaView>
  );
}
