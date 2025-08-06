interface PokemonTypeDescription {
  color: string;
  label: string;
}

export const POKEMON_TYPE: { [key: string]: PokemonTypeDescription } = {
  normal: { label: "노말", color: "#999999" },
  fighting: { label: "격투", color: "#ffa202" },
  flying: { label: "비행", color: "#95c9ff" },
  poison: { label: "독", color: "#735198" },
  ground: { label: "땅", color: "#9c7743" },
  rock: { label: "바위", color: "#bcb889" },
  bug: { label: "벌레", color: "#9fa424" },
  ghost: { label: "고스트", color: "#6e4570" },
  steel: { label: "강철", color: "#6aaed3" },
  fire: { label: "불꽃", color: "#ff612c" },
  water: { label: "물", color: "#2992ff" },
  grass: { label: "풀", color: "#42bf24" },
  electric: { label: "전기", color: "#ffdb00" },
  psychic: { label: "에스퍼", color: "#ff637f" },
  ice: { label: "얼음", color: "#42d8ff" },
  dragon: { label: "드래곤", color: "#5462d6" },
  dark: { label: "악", color: "#4f4747" },
  fairy: { label: "페어리", color: "#ffb1ff" },
} as const;
