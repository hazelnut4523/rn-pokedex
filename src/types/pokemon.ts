import { PokeApiLang } from "./pokeapi_lang";

export interface Pokemon {
  /** 포켓몬 도감 번호 */
  id: number;

  /** 이름 */
  name: string;

  /** 분류 */
  genera: string;

  /** 포켓몬 타입 */
  types: string[];

  /** 포켓몬 이미지 URL */
  imageUrl: URL;

  /** 키 (센티미터 단위) */
  height: HeightInCentimeter;

  /** 체중 (그램 단위) */
  weight: WeightInGram;

  /** 특성 */
  abilities: string[];

  /** 설명 */
  flavorText: FlavorText[];

  /** 포획률 */
  captureRate: number;
}

interface FlavorText {
  /** 텍스트 */
  text: string;

  /** 언어 */
  language: PokeApiLang;

  /** 버전 */
  version: string;
}

type HeightInCentimeter = number;
type WeightInGram = number;
