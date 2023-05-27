import { DeleteOutline } from '@mui/icons-material';
import { Grid, Checkbox, Box, Typography, IconButton } from '@mui/material';
import Image from 'mui-image';
import { useState } from 'react';
export const ProductItem = props => {
  const [detail, setDetail] = useState(false);
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ border: 1, borderColor: 'lightgray', borderRadius: '16px' }}
      my={1}
    >
      {/* {detail && <DetailProduct />} */}
      <Grid item xs={1} justifyContent={'center'} justifyItems={'center'}>
        {/* {!detail &&  */}
        <Checkbox />
      </Grid>
      <Grid
        item
        xs={5}
        onMouseEnter={() => setDetail(true)}
        onMouseLeave={() => {
          setDetail(false);
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box width={120} height={120} mx={4}>
            <Image
              src="./item-1.png"
              alt="Item"
              fit="cover"
              easing="linear"
              duration={1000}
            />
          </Box>
          <Box mx={6}>
            <Typography variant="h6" fontWeight={'bold'} mb={3}>
              {/* {cartItem.name} */}
              Áo
            </Typography>
            {/* <Typography color={'primary'}>{'Golden Accessories'}</Typography> */}
            <Typography mt={3} color={'dimgray'}>
              Category: Áo
            </Typography>
          </Box>
          <Box mx={4}>
            <Typography variant="h6" fontWeight={'bold'}>
              Price: 230.000
            </Typography>
            <Typography mt={2} color={'dimgray'}>
              Discount: 180.000
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2.5}></Grid>
      <Grid item xs={2.5}></Grid>
      <Grid item xs={1}>
        {/* {!detail && ( */}
        <IconButton
        // onClick={() => removeCartItem()}
        >
          <DeleteOutline htmlColor="dimgray" />
        </IconButton>
        {/* )} */}
      </Grid>
    </Grid>
  );
};
