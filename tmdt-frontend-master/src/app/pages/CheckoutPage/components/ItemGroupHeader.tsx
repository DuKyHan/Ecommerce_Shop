import { Grid, Typography } from '@mui/material';

export const ItemGroupHeader = props => {
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={6}>
        <Typography color={'dimgray'}>Sản phẩm</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color={'dimgray'}>Số lượng</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color={'dimgray'}>Giá</Typography>
      </Grid>
    </Grid>
  );
};
