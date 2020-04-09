export interface SizeInterface {
  id: number;
  size: string;
  price: number;
}

export interface ItemInterface {
  item: {
    id: number;
    size: string;
    price: number;
    formattedPrice: string;
  };
  size: {
    id: number;
    size: string;
    price: number;
    formattedPrice: string;
  };
}
