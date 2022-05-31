import { ChangeEvent } from "react";

export interface ICollectionProps {
  id: number;
  name: string;
  pic: string;
  sum: number;
  newSum: number;
}

export interface ICollectionArr {
  id: number;
  image_url: string;
  token_id: number;
}

export interface IFilters {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilter: (filter: string) => void;
  removeFilters: () => void;
  handleOrder: (order: string) => void;
  handleSubmit: () => void;
  orderBy: string;
  filteredApi: boolean;
  sales: string;
}

export interface ISingleAsset {
  banner_image_url: string;
  image_url: string;
  name: string;
  safelist_request_status: string;
  description: string;
  slug: string;
}

// todo: change any types
export interface IPrices {
  count: number;
  num_owners: number;
  floor_price: number;
  average_price: any;
  seven_day_volume: any;
  one_day_volume: any;
  one_day_sales: number;
  seven_day_sales: number;
}
