import { NavigateNext } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { popularProductData } from '../../../../data';
import { ProductCardGroup } from './ProductCardGroup';

export const PopularProducts = props => {
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
            Được mua nhiều
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <NavigateNext color={'primary'} />
            <Typography color={'primary'}>Xem Thêm</Typography>
          </Box>
        </Box>
      </Box>
      <ProductCardGroup
        items={popularProductData}
        my={3}
        itemsPerLine={4}
        cardProps={{
          isHot: true,
          showNextButton: true,
          discountBadge: {},
        }}
      />
    </Box>
  );
};
