import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";
import { PokemonTypeBadge } from "../badge/PokemonTypeBadge";
import { Pokemon } from "@/src/types/pokemon";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react-native";
import { getPokemonInfo } from "@/src/utils/get_pokemon_info";
import { PokemonCardSkeleton } from "../skeleton/PokemonCardSkeleton";
import { PokemonAbilityBadge } from "../badge/PokemonAbilityBagde";

interface Props {
  pokemonId: number;
}

export function PokemonCard({ pokemonId }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    getPokemonInfo(pokemonId, "ko").then(setPokemon);
  }, [pokemonId]);

  return pokemon ? (
    <PokemonCardDataExist pokemon={pokemon} />
  ) : (
    <PokemonCardSkeleton />
  );
}

function PokemonCardDataExist({ pokemon }: { pokemon: Pokemon }) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        className="rounded-md w-full border border-neutral-400 bg-neutral-100 shadow-sm p-2 flex flex-col gap-2"
      >
        <Image
          source={{ uri: pokemon.imageUrl.toString() }}
          className="w-full aspect-square rounded-md"
        />

        <Text className="text-lg font-semibold">{pokemon.name}</Text>

        <View className="flex flex-row gap-2 justify-start">
          {pokemon.types.map((item, idx) => (
            <PokemonTypeBadge key={idx} pokemonType={item} />
          ))}
        </View>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <View className="flex flex-col gap-6 p-4 items-center relative">
          <Image
            source={{ uri: pokemon.imageUrl.toString() }}
            className="w-3/4 aspect-square"
          />

          <View className="flex flex-col items-center gap-2">
            <Text className="text-3xl font-bold">{pokemon.name}</Text>
            <Text className="text-neutral-600 text-lg">{pokemon.genera}</Text>
          </View>

          <View className="flex flex-row gap-2 justify-start">
            {pokemon.types.map((item, idx) => (
              <PokemonTypeBadge key={idx} pokemonType={item} />
            ))}
          </View>

          <View className="flex flex-row gap-2 items-start w-full">
            <View className="flex flex-col gap-2 items-start w-full">
              <Text className="text-lg font-semibold">설명</Text>
              <Text>{pokemon.flavorText[0].text}</Text>
            </View>
          </View>

          <View className="flex flex-row gap-4">
            <View className="flex flex-col gap-2 items-start flex-1">
              <Text className="text-lg font-semibold">키</Text>
              <Text className="">{pokemon.height}cm</Text>
            </View>

            <View className="flex flex-col gap-2 items-start flex-1">
              <Text className="text-lg font-semibold">몸무게</Text>
              <Text className="">
                {pokemon.weight > 1000
                  ? `${pokemon.weight / 1_000}kg`
                  : `${pokemon.weight}g`}
              </Text>
            </View>
          </View>

          <View className="flex flex-col gap-2 items-start w-full">
            <Text className="text-lg font-semibold">포획률</Text>
            <Text className="">{pokemon.captureRate}</Text>
          </View>

          <View className="flex flex-row gap-4">
            <View className="flex flex-col gap-2 items-start flex-1">
              <Text className="text-lg font-semibold">특성</Text>
              <FlatList
                horizontal={true}
                scrollEnabled={false}
                data={pokemon.abilities}
                ItemSeparatorComponent={() => <View className="w-2" />}
                renderItem={({ item }) => (
                  <PokemonAbilityBadge value={item} language="ko" />
                )}
              />
            </View>
          </View>
        </View>

        <View>
          <Pressable
            onPress={() => setModalVisible(false)}
            className="bg-red-200 p-4 rounded-md flex flex-row justify-center items-center gap-4"
          >
            <XIcon />
            <Text className="text-lg font-semibold">닫기</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
