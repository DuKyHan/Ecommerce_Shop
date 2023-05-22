import { createContext } from 'react';
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  removeCartItem,
  removeCartItems,
  setCartItems,
  subtractCartItem,
} from '../data';

export const CartItemsContext = createContext({
  cartItems: getCartItems(),
  setCartItems: setCartItems,
  removeCartItem: removeCartItem,
  removeCartItems: removeCartItems,
  addCartItem: addCartItem,
  subtractCartItem: subtractCartItem,
  clearCartItems: clearCartItems,
});
