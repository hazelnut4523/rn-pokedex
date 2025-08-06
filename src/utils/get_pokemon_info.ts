import { Pokemon } from "../types/pokemon";

export async function getPokemonInfo(
  id: number,
  language?: PokeApiLang,
): Promise<Pokemon> {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const pokemonRes = await fetch(url);
    const pokemonSpeciesRes = await fetch(speciesUrl);

    const pokemon = await pokemonRes.json();
    const pokemonSpecies = await pokemonSpeciesRes.json();

    return {
      id: pokemonSpecies.id,
      name: language
        ? getLocalNameInNamesArr(pokemonSpecies.names, language)
        : pokemonSpecies.name,
      genera: language
        ? getLocalGenusInGeneraArr(pokemonSpecies.genera, language)
        : getLocalGenusInGeneraArr(pokemonSpecies.genera, "en"),
      types: pokemon.types.map(
        (type: { type: { name: string; url: string }; slot: number }) =>
          type.type.name,
      ),
      imageUrl: new URL(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      ),
      height: pokemon.height * 10,
      weight: pokemon.weight * 100,
    };
  } catch (error) {
    throw new Error(`Failed to fetch Pokemon info for ID ${id}: ${error}`);
  }
}

function getLocalNameInNamesArr(
  names: { language: { name: string }; name: string }[],
  language: PokeApiLang,
) {
  return names.find((name) => name.language.name === language)?.name || "";
}

function getLocalGenusInGeneraArr(
  genera: { language: { name: string }; genus: string }[],
  language: PokeApiLang,
) {
  return genera.find((genus) => genus.language.name === language)?.genus || "";
}

type PokeApiLang =
  | "ja-Hrkt"
  | "roomaji"
  | "ko"
  | "zh-Hant"
  | "fr"
  | "de"
  | "es"
  | "it"
  | "en"
  | "ja"
  | "zh-Hans";
