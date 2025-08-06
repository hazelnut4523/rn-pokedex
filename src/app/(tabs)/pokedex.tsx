import { PokemonCard } from "@/src/components/card/PokemonCard";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function PokedexScreen() {
  const [array, setArray] = useState<number[]>(
    new Array(10).fill(null).map((_, index) => index + 1),
  );

  const handleEndReached = () => {
    setArray((val) => [
      ...val,
      ...new Array(10).fill(null).map((_, idx) => val.length + idx + 1),
    ]);
  };

  return (
    <View className="flex-1 px-4 pt-4 flex flex-col gap-4">
      <Text className="text-[32px] font-bold font-[DungGeunMo]">도감</Text>

      <FlatList
        data={array}
        onEndReached={handleEndReached}
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
