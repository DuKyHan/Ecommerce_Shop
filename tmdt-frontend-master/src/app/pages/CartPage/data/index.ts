import { CartItem } from '../types';

export const getCartItems = (): CartItem[] => {
  const raw = localStorage.getItem('cartItems');
  if (raw == null) {
    return [];
  }
  return JSON.parse(raw);
};

export const setCartItems = (cartItems: CartItem[]): void => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const addCartItem = (cartItem: CartItem, quantity: number = 1): void => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex(
    item =>
      item.id === cartItem.id &&
      item.size === cartItem.size &&
      item.color === cartItem.color,
  );
  if (index === -1) {
    cartItems.push(cartItem);
  } else {
    cartItems[index].quantity += quantity;
  }
  setCartItems(cartItems);
};

export const subtractCartItem = (
  cartItem: CartItem,
  quantity: number = 1,
): void => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex(
    item =>
      item.id === cartItem.id &&
      item.size === cartItem.size &&
      item.color === cartItem.color,
  );
  if (index !== -1) {
    cartItems[index].quantity -= 1;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
  }
  setCartItems(cartItems);
};

export const removeCartItem = (cartItem: CartItem): void => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex(
    item =>
      item.id === cartItem.id &&
      item.size === cartItem.size &&
      item.color === cartItem.color,
  );
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
  setCartItems(cartItems);
};

export const removeCartItems = (cartItems: CartItem[]): void => {
  const currentCartItems = getCartItems();
  cartItems.forEach(cartItem => {
    const index = currentCartItems.findIndex(
      item =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color,
    );
    if (index !== -1) {
      currentCartItems.splice(index, 1);
    }
  });
  setCartItems(currentCartItems);
};

export const clearCartItems = (): void => {
  setCartItems([]);
};
