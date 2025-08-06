import { AppHeader } from "@/src/components/common";
import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="px-6">
      <AppHeader />

      <Text className="text-4xl font-bold font-[DungGeunMo]">홈</Text>
    </View>
  );
}
