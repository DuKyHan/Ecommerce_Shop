/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { createContext, useContext, useState } from 'react';
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
import { AdminPage } from './pages/AdminPage';
import { DetailProduct } from './pages/AdminPage/components/DetailProduct';
import { AuthContext } from './pages/LoginPage/context';

export function App() {
  const { i18n } = useTranslation();
  const [cartItems, setCartItems] = useState(getCartItems());
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('accessToken') != null,
  );

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
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Davies Fashion"
        defaultTitle="Davies Fashion"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Davies Fashion" />
      </Helmet>
      <AuthContext.Provider
        value={{
          logout: () => {
            setIsLoggedIn(false);
            localStorage.removeItem('accessToken');
          },
          isLoggedIn: isLoggedIn,
        }}
      >
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
            {/* <Route path="/test" element={<DetailProduct />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/done" element={<PostCheckoutPage />} />
            <Route path="/general" element={<General value={0} />} />
            <Route path="/general/support" element={<General value={1} />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to={'/'} /> : <LoginPage />}
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <HomePage /> : <SignUpPage />}
            />
            <Route path="/admin" element={<AdminPage value={0} />} />
            <Route path="/admin/support" element={<AdminPage value={1} />} />
            <Route
              path="/general/policy/:page"
              element={<General page={0} value={2} />}
            />
            <Route
              path="/admin/policy/:page"
              element={<AdminPage page={0} value={2} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CartItemsContext.Provider>
      </AuthContext.Provider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
