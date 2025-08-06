import { View } from "react-native";

export function PokemonCardSkeleton() {
  return (
    <View className="flex flex-col gap-2 p-2 w-full border border-neutral-400 rounded-md bg-neutral-100 shadow-sm">
      <View className="w-full aspect-square animate-pulse bg-neutral-400 rounded-md" />

      <View className="w-2/3 h-5 animate-pulse bg-neutral-400 rounded-full" />

      <View className="flex flex-row gap-2">
        <View className="w-16 h-8 px-4 py-2 animate-pulse bg-neutral-400 rounded-md" />
        <View className="w-16 h-8 px-4 py-2 animate-pulse bg-neutral-400 rounded-md" />
      </View>
    </View>
  );
}
