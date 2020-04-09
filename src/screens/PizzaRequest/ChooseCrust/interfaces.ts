export interface CrustInterface {
  id: number;
  type: string;
  price: number;
}
export interface ItemInterface {
  item: {
    id: number;
    type: string;
    price: number;
    formattedPrice: string;
  };
  crust: {
    id: number;
    type: string;
    price: number;
    formattedPrice: string;
  };
}
