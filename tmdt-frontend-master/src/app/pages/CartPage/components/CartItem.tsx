import { DeleteOutline } from '@mui/icons-material';
import { Box, Checkbox, Grid, IconButton, Typography } from '@mui/material';
import Image from 'mui-image';
import { CartItemProps } from '../types';
import { CartItemPrice } from './CartItemPrice';
import { CartItemQuantity } from './CartItemQuantity';

export const CartItem = (props: CartItemProps) => {
  const cartItem = props.cartItem;
  const removeCartItem = props.removeCartItem;
  const addCartItem = props.addCartItem;
  const subtractCartItem = props.subtractCartItem;

  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ border: 1, borderColor: 'lightgray', borderRadius: '16px' }}
    >
      <Grid item xs={1} justifyContent={'center'} justifyItems={'center'}>
        <Checkbox />
      </Grid>
      <Grid item xs={5}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box width={120} height={120}>
            <Image
              src={cartItem.image}
              alt="Item"
              fit="cover"
              easing="linear"
              duration={1000}
            />
          </Box>
          <Box mx={2}>
            <Typography variant="h6" fontWeight={'bold'}>
              {cartItem.name}
            </Typography>
            <Typography color={'primary'}>{'Golden Accessories'}</Typography>
            <Typography mt={2} color={'dimgray'}>
              Size: {cartItem.size}, Màu: {cartItem.color}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2.5}>
        <CartItemQuantity
          cartItem={cartItem}
          removeCartItem={removeCartItem}
          addCartItem={addCartItem}
          subtractCartItem={subtractCartItem}
        />
      </Grid>
      <Grid item xs={2.5}>
        <CartItemPrice
          cartItem={cartItem}
          removeCartItem={removeCartItem}
          addCartItem={addCartItem}
          subtractCartItem={subtractCartItem}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={() => removeCartItem()}>
          <DeleteOutline htmlColor="dimgray" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
