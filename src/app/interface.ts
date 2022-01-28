export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  offers?: Offer[]
}

export interface CartItem {
  product: Product;
  quantity: number;
  discount?: number;
}

export interface Offer {
  name: string;
  discount: number;
}
