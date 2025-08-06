export interface Pokemon {
  /** 포켓몬 도감 번호 */
  id: number;

  /** 이름 */
  name: string;

  /** 포켓몬 타입 */
  types: string[];

  /** 포켓몬 이미지 URL */
  imageUrl: URL;

  /** 키 (센티미터 단위) */
  height: HeightInCentimeter;

  /** 체중 (그램 단위) */
  weight: WeightInGram;
}

type HeightInCentimeter = number;
type WeightInGram = number;
