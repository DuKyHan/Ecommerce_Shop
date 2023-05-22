import { NavigateNext } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ProductCardGroup } from '.';
import { discoverProductData } from '../../../../data';

export const DiscoverProducts = props => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5" fontWeight={'bold'}>
            Khám phá
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <NavigateNext color={'primary'} />
            <Typography color={'primary'}>Xem Thêm</Typography>
          </Box>
        </Box>
        <ProductCardGroup
          items={[...discoverProductData, ...discoverProductData]}
          my={3}
          itemsPerLine={5}
          cardProps={{
            priceTextVariant: 'h6',
            imageHeight: 200,
            contentHeight: 135,
            discountBadge: {},
          }}
        />
      </Box>
    </Box>
  );
};
