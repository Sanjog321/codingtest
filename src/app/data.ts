import { CartItem, Product } from './interface';

export const products: Product[] = [
  {
    id: '1001',
    name: 'Apple',
    imageUrl:
      'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
    price: 0.6,
    offers: [
      {
        name: 'Buy one, get one free',
        discount: 1 / 2,
      },
    ],
  },
  {
    id: '1002',
    name: 'Orange',
    imageUrl:
      'https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=',
    price: 0.25,
    offers: [
      {
        name: '3 for the price of 2',
        discount: 1 / 3,
      },
    ],
  },
];

export const cartItems: CartItem[] = [
  {
    product: {
      ...products[0],
    },
    quantity: 2,
    discount: 0
  },
  {
    product: {
      ...products[1],
    },
    quantity: 3,
    discount: 0
  },
];
