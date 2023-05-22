import { Box, Typography } from '@mui/material';
import { ProductCardGroup } from 'app/pages/ProductPage/components';
import { discoverProductData } from 'data';

export const ProductSimilarProduct = props => {
  return (
    <Box>
      <Typography variant="h5">Các sản phẩm tương tự</Typography>
      <ProductCardGroup
        items={[...discoverProductData, ...discoverProductData]}
        my={5}
        itemsPerLine={5}
        cardProps={{
          priceTextVariant: 'h6',
          imageHeight: 200,
          contentHeight: 135,
          discountBadge: {},
        }}
      />
    </Box>
  );
};
