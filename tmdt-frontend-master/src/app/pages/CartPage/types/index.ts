import { Product } from 'data';

export interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
}

export interface CartItemProps {
  cartItem: CartItem;
  removeCartItem: () => void;
  subtractCartItem: () => void;
  addCartItem: () => void;
}

export interface CartItemHeaderProps {
  clearCartItems: () => void;
}

export interface CartItemGroupProps {
  cartItems: CartItem[];
  removeCartItem: (cartItem: CartItem) => void;
  subtractCartItem: (cartItem: CartItem) => void;
  addCartItem: (cartItem: CartItem) => void;
  clearCartItems: () => void;
}

export interface CartOrderDetailsProps {
  cartItems: CartItem[];
}
