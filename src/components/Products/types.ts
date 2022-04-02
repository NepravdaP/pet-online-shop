export interface ProductWraperProps {
  screenWidth: number;
}
export interface ProductCardProps {
  bg: string;
}
export interface FilterValues {
  mac: string | undefined;
  win: number | undefined;
  lin: number | undefined;
  rating: number;
  price: number;
}
export interface DropdownFilterProps {
  setFilterValues: (Values: FilterValues) => void;
  queryString: string;
  setQueryString: (Value: string) => void;
}
