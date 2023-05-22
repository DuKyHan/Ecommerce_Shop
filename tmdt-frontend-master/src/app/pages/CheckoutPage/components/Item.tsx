import { Box, Grid, Typography } from '@mui/material';
import Image from 'mui-image';

export const Item = props => {
  const cartItem = props.cartItem;

  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ border: 1, borderColor: 'lightgray' }}
    >
      <Grid item xs={6}>
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
      <Grid item xs={3}>
        <Typography>{cartItem.quantity}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant={'h6'} color={'error'} fontWeight={'bold'}>
          {Math.trunc(
            (cartItem.price - cartItem.price * cartItem.discount) *
              cartItem.quantity,
          ).toLocaleString()}
          đ
        </Typography>
      </Grid>
    </Grid>
  );
};
