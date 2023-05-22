import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import { BrandData } from '../data';

export const BrandList = props => {
  const brandData = BrandData;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        my={6}
        fontWeight={'bold'}
        variant="h5"
        sx={{ display: 'flex', alignSelf: 'center' }}
      >
        Với các thương hiệu hàng đầu
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {brandData.map(brand => (
          <Image
            src={brand.image}
            alt="Brand"
            fit="scale-down"
            easing="linear"
            duration={1000}
            style={{ borderRadius: '0 16px 16px 0' }}
            height={64}
          ></Image>
        ))}
      </Box>
    </Box>
  );
};
