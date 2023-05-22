import { ShareOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ProductMainSectionProps } from '../types';

export const ProductMainSectionName = (props: ProductMainSectionProps) => {
  const product = props.product;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={'bold'}>
          {product.name}
        </Typography>
        <Box my={2} sx={{ display: 'flex' }}>
          <Typography mr={1}>Thương hiệu: </Typography>
          <Typography color={'primary'}>Golden Accessories</Typography>
        </Box>
      </Box>
      <Box mr={2} sx={{ display: 'flex' }} color={'primary'}>
        <ShareOutlined color="primary" />
        <Typography ml={1} color={'primary'} fontWeight={'medium'}>
          Chia sẻ
        </Typography>
      </Box>
    </Box>
  );
};
