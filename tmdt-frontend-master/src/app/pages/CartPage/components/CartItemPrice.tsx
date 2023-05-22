import { Box, Typography } from '@mui/material';
import { CartItemProps } from '../types';

export const CartItemPrice = (props: CartItemProps) => {
  const cartItem = props.cartItem;

  return (
    <Box>
      <Typography variant={'h6'} color={'error'} fontWeight={'bold'}>
        {Math.trunc(
          (cartItem.price - cartItem.price * cartItem.discount) *
            cartItem.quantity,
        ).toLocaleString()}
        đ
      </Typography>
      <Typography
        variant="subtitle1"
        color={'gray'}
        sx={{ textDecoration: 'line-through' }}
      >
        {(cartItem.price * cartItem.quantity).toLocaleString()}đ
      </Typography>
    </Box>
  );
};
