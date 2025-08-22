export interface IProduct {
  name: string;
  img: string;
  price: number;
  oldPrice: number;
}

export interface iCart {
  product: string;
  price: number;
  quantity: number;
  name: string;
}
