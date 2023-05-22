import { Box, Typography } from '@mui/material';
import { ProductMainSectionProps } from '../types';

export const ProductMainSectionPrice = (props: ProductMainSectionProps) => {
  const product = props.product;

  return (
    <Box>
      <Typography color="dimgray">Giá:</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
        }}
        my={1}
      >
        <Typography variant={'h4'} color={'error'} fontWeight={'bold'}>
          {Math.trunc(
            product.price - product.price * product.discount,
          ).toLocaleString()}
          đ
        </Typography>
        <Typography
          variant="h5"
          color={'gray'}
          sx={{ textDecoration: 'line-through' }}
          ml={2}
        >
          {product.price.toLocaleString()}đ
        </Typography>
      </Box>
    </Box>
  );
};
