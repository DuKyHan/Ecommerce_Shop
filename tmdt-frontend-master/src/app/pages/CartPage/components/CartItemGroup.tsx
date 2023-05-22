import { Box, Typography } from '@mui/material';
import { CartItem, CartItemHeader } from '.';
import { CartItemGroupProps } from '../types';

export const CartItemGroup = (props: CartItemGroupProps) => {
  const items = props.cartItems;
  const removeCartItem = props.removeCartItem;
  const addCartItem = props.addCartItem;
  const subtractCartItem = props.subtractCartItem;
  const clearCartItems = props.clearCartItems;

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <CartItemHeader clearCartItems={clearCartItems} />
      </Box>

      {items.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <Typography variant="h5">Giỏ hàng trống</Typography>
        </Box>
      ) : (
        items.map((item, index) => (
          <Box my={1} key={index}>
            <CartItem
              cartItem={item}
              removeCartItem={() => removeCartItem(item)}
              addCartItem={() => addCartItem(item)}
              subtractCartItem={() => subtractCartItem(item)}
            />
          </Box>
        ))
      )}
    </Box>
  );
};
