import { PokeApiLang } from "@/src/types/pokeapi_lang";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  value: string;
  language?: PokeApiLang;
}

export function PokemonAbilityBadge({ value, language }: Props) {
  const [label, setLabel] = useState<string>();

  useEffect(() => {
    if (!language) {
      setLabel(value);
      return;
    }
    fetch(`https://pokeapi.co/api/v2/ability/${value}`)
      .then((res) => res.json())
      .then((data) => {
        const localized = data.names.find(
          (item) => item.language.name === language,
        ).name;
        setLabel(localized);
      })
      .catch((error) => console.error(error));
  }, [value, language]);

  return (
    <View className="border border-gray-300 rounded-md px-2 py-1 items-center">
      <Text>{label}</Text>
    </View>
  );
}
