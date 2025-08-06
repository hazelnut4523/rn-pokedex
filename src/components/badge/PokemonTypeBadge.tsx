import { POKEMON_TYPE } from "@/src/consts/pokemon_type";
import { Text, View } from "react-native";

interface Props {
  pokemonType: string;
}

export function PokemonTypeBadge({ pokemonType }: Props) {
  const normal = (
    <View
      className="w-fit px-2 py-1 rounded-md"
      style={{ backgroundColor: POKEMON_TYPE[pokemonType].color }}
    >
      <Text
        className="font-semibold"
        style={{ color: getContrastTextColor(POKEMON_TYPE[pokemonType].color) }}
      >
        {POKEMON_TYPE[pokemonType].label}
      </Text>
    </View>
  );

  return normal;
}

// RGB 값을 선형 RGB로 변환
function toLinear(colorChannel: number): number {
  const c = colorChannel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// 상대 휘도 계산 (WCAG 공식)
function getLuminance(r: number, g: number, b: number): number {
  const [rLinear, gLinear, bLinear] = [r, g, b].map(toLinear);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

// 배경색에 적합한 텍스트 색상 결정
function getContrastTextColor(backgroundColor: string): string {
  // 16진수 색상을 RGB로 변환
  let r, g, b;

  if (backgroundColor.startsWith("#")) {
    const hex = backgroundColor.slice(1);
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  } else if (backgroundColor.startsWith("rgb")) {
    const match = backgroundColor.match(/\d+/g);
    [r, g, b] = match.map(Number);
  }

  const luminance = getLuminance(r, g, b);

  // 휘도가 0.5보다 크면 어두운 배경으로 간주하여 흰색 텍스트
  // 0.5보다 작으면 밝은 배경으로 간주하여 검은색 텍스트
  return luminance > 0.5 ? "#000000" : "#ffffff";
}
