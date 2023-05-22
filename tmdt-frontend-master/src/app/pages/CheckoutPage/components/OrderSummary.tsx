import {
  Box,
  Button,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { clearCartItems } from 'app/pages/CartPage/data';
import { useNavigate } from 'react-router-dom';
import { EPaymentMethod, OrderSummaryProps } from '../types';
import { axiosClient } from 'data';
import { CartItemsContext } from 'app/pages/CartPage/context';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' } },
});

export const OrderSummary = (props: OrderSummaryProps) => {
  const cartItems = props.cartItems;
  const price = cartItems.reduce(
    (acc, item) =>
      acc + (item.price - item.price * item.discount) * item.quantity,
    0,
  );
  const shippingFee = cartItems.length === 0 ? 0 : 30000;
  const totalPrice = price + shippingFee;
  const paymentMethod = props.paymentMethod;

  const navigate = useNavigate();

  return (
    <CartItemsContext.Consumer>
      {context => (
        <Box
          p={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 1,
            borderColor: 'lightgray',
            borderRadius: '16px',
            gap: 2,
          }}
        >
          <Typography variant="h5" mb={4}>
            Thông tin đơn hàng
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography color={'dimgray'} flexGrow={1}>
              Tạm tính
            </Typography>
            <Typography>{price.toLocaleString()}đ</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography color={'dimgray'} flexGrow={1}>
              Phí vận chuyển
            </Typography>
            <Typography>{shippingFee.toLocaleString()}đ</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography flexGrow={1} fontWeight={'bold'}>
              Tổng tiền
            </Typography>
            <Typography variant="h6" color={'error'} fontWeight={'bold'}>
              {(price + shippingFee).toLocaleString()}đ
            </Typography>
          </Box>
          {paymentMethod === EPaymentMethod.PayPal ? (
            <PayPalScriptProvider
              options={{
                'client-id':
                  'ATZx8d85uVIpa1kHoTDKlTqVhAyBBnRPgOtYnRWS6y2Wt6fQKVBkqHiDbDow1OJD6uwtA6oTn0e8ogyl',
              }}
            >
              <Box sx={{ mt: 2 }}>
                <PayPalButtons
                  style={{
                    layout: 'horizontal',
                    color: 'black',
                    tagline: false,
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: `${Math.trunc(totalPrice / 23000)}`,
                            currency_code: 'USD',
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    actions.order?.capture().then(details => {
                      clearCartItems();
                      navigate('/checkout/done', {
                        state: { isSuccessful: true },
                      });
                    });
                  }}
                  onCancel={async (data, actions) => {}}
                  onError={async err => {
                    navigate('/checkout/done', {
                      state: { isSuccessful: false },
                    });
                  }}
                />
              </Box>
            </PayPalScriptProvider>
          ) : (
            <ThemeProvider theme={primaryBlack}>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                onClick={() =>
                  axiosClient
                    .post(
                      '/order',
                      // JSON.stringify({
                      //   userId: 1,
                      //   address: 'asdasd',
                      //   numberphone: '29371239123',
                      //   orderitems: cartItems.map(ci => ({
                      //     productId: 1,
                      //     quantity: ci.quantity,
                      //     price: ci.price,
                      //   })),
                      // }),
                      {
                        userId: 1,
                        address: 'asdasd',
                        numberphone: '29371239123',
                        orderitems: cartItems.map(ci => ({
                          productId: 1,
                          quantity: ci.quantity,
                          price: ci.price,
                        })),
                      },
                    )
                    .catch(err =>
                      navigate('/checkout/done', {
                        state: { isSuccessful: false },
                      }),
                    )
                    .then(data => {
                      context.clearCartItems();
                      navigate('/checkout/done', {
                        state: { isSuccessful: true },
                      });
                    })
                }
              >
                Đặt hàng
              </Button>
            </ThemeProvider>
          )}
        </Box>
      )}
    </CartItemsContext.Consumer>
  );
};
