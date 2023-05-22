import { Box, Typography } from '@mui/material';
import { ItemGroupProps } from '../types';
import { Item } from './Item';
import { ItemGroupHeader } from './ItemGroupHeader';

export const ItemGroup = (props: ItemGroupProps) => {
  const items = props.cartItems;

  return (
    <Box
      sx={{ border: 1, borderColor: 'lightgray', borderRadius: '16px', p: 2 }}
    >
      <Typography variant="h5">Đơn hàng</Typography>

      <Box sx={{ my: 2 }}>
        <ItemGroupHeader />
      </Box>

      {items.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <Typography variant="h5">Có lỗi xảy ra. Vui lòng thử lại</Typography>
        </Box>
      ) : (
        items.map((item, index) => (
          <Box my={1} key={index}>
            <Item cartItem={item} />
          </Box>
        ))
      )}
    </Box>
  );
};
