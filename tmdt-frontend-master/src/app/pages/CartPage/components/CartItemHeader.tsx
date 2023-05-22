import { DeleteOutline } from '@mui/icons-material';
import { Checkbox, Grid, IconButton, Typography } from '@mui/material';
import { CartItemHeaderProps } from '../types';

export const CartItemHeader = (props: CartItemHeaderProps) => {
  const clearCartItems = props.clearCartItems;

  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={1}>
        <Checkbox />
      </Grid>
      <Grid item xs={5}>
        <Typography color={'dimgray'}>Sản phẩm</Typography>
      </Grid>
      <Grid item xs={2.5}>
        <Typography color={'dimgray'}>Số lượng</Typography>
      </Grid>
      <Grid item xs={2.5}>
        <Typography color={'dimgray'}>Giá</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={clearCartItems}>
          <DeleteOutline htmlColor={'dimgray'} />
        </IconButton>
      </Grid>
    </Grid>
  );
};
