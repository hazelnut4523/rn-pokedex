import { PokemonCard } from "@/src/components/card/PokemonCard";
import { FlatList, Text, View } from "react-native";

export default function PokedexScreen() {
  return (
    <View className="flex-1 px-4 pt-4 flex flex-col gap-4">
      <Text className="text-[32px] font-bold font-[DungGeunMo]">도감</Text>

      <FlatList
        data={new Array(50).fill(null).map((_, index) => index + 1)}
        renderItem={({ item }) => (
          <View className="w-1/2 p-2">
            <PokemonCard pokemonId={item} />
          </View>
        )}
        numColumns={2}
        className="w-full h-full flex-col gap-2"
      />
    </View>
  );
}
