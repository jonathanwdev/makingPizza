export interface FlavorsInterface {
  id: number;
  flavor: string;
  img_url: string;

  cart: {
    id: number;
    flavor: string;
    img_url: string;
  };
}

export interface ItemInterface {
  item: {
    id: number;
    flavor: string;
    img_url: string;
  };
}
