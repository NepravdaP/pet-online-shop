export type Props = {
  searchResult?: Array<EnumGamesItem>;
};
export interface EnumGamesItem {
  title: string;
  img: string;
  ps: boolean;
  pc: boolean;
  xbox: boolean;
  platform: string;
  rating: number;
  price: number;
  color: string;
}
