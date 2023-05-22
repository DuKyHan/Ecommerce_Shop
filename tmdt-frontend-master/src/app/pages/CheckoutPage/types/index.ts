import { CartItem } from 'app/pages/CartPage/types';

export enum EPaymentMethod {
  Cod = 'COD',
  PayPal = 'PAYPAL',
}

export interface OrderSummaryProps {
  cartItems: CartItem[];
  paymentMethod: EPaymentMethod;
}

export interface ItemGroupProps {
  cartItems: CartItem[];
}

export interface PaymentMethodProps {
  paymentMethod: EPaymentMethod;
  setPaymentMethod: (paymentMethod: EPaymentMethod) => void;
}

export interface PaymentMethodButtonProps {
  paymentMethod: EPaymentMethod;
  currentPaymentMethod: EPaymentMethod;
  setPaymentMethod: (paymentMethod: EPaymentMethod) => void;
  imageSrc?: string;
  title: string;
}
