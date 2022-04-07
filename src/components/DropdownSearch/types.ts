export type Props = {
  searchResult?: Array<GamesItem>;
  isSearching: boolean;
};
export interface GamesItem {
  _id: string;
  title: string;
  price: number;
  rating: number;
  win: boolean;
  mac: boolean;
  linux: boolean;
  description: string;
  image: string;
  color: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface CartItem extends GamesItem {
  quantity: number;
  checked: boolean;
}
