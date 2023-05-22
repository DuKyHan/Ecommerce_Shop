/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar } from './components/NavBar';
import { CartPage } from './pages/CartPage';
import { CartItemsContext } from './pages/CartPage/context';
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  removeCartItem,
  removeCartItems,
  subtractCartItem,
} from './pages/CartPage/data';
import { CartItem } from './pages/CartPage/types';
import { CheckoutPage } from './pages/CheckoutPage';
import { DesignPage } from './pages/DesignPage';
import { General } from './pages/General';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { PostCheckoutPage } from './pages/PostCheckoutPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductPage } from './pages/ProductPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUp';

export function App() {
  const { i18n } = useTranslation();
  const [cartItems, setCartItems] = useState(getCartItems());

  const setItems = (items: CartItem[]) => {
    setCartItems(items);
    setCartItems(getCartItems());
  };
  const removeItem = (item: CartItem) => {
    removeCartItem(item);
    setCartItems(getCartItems());
  };
  const removeItems = (items: CartItem[]) => {
    removeCartItems(items);
    setCartItems(getCartItems());
  };
  const addItem = (item: CartItem) => {
    addCartItem(item);
    setCartItems(getCartItems());
  };
  const subtractItem = (item: CartItem) => {
    subtractCartItem(item);
    setCartItems(getCartItems());
  };
  const clearItems = () => {
    clearCartItems();
    setCartItems([]);
  };
  const raw = localStorage.getItem('UserInfor');
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Davies Fashion"
        defaultTitle="Davies Fashion"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Davies Fashion" />
      </Helmet>
      <CartItemsContext.Provider
        value={{
          cartItems: cartItems,
          setCartItems: setItems,
          removeCartItem: removeItem,
          removeCartItems: removeItems,
          addCartItem: addItem,
          subtractCartItem: subtractItem,
          clearCartItems: clearItems,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/done" element={<PostCheckoutPage />} />
          <Route path="/general" element={<General value={0} />} />
          <Route path="/general/support" element={<General value={1} />} />
          <Route path="/login" element={raw ? <HomePage /> : <LoginPage />} />
          <Route path="/signup" element={raw ? <HomePage /> : <SignUpPage />} />
          <Route
            path="/general/policy/:page"
            element={<General page={0} value={2} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartItemsContext.Provider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
