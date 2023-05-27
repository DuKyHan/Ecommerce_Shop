import { DeleteOutline } from '@mui/icons-material';
import { Grid, Checkbox, Box, Typography, IconButton } from '@mui/material';
import Image from 'mui-image';
export const OrderItem = props => {
  console.log(props);
  return (
    <Box
      p={4}
      my={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: 'lightgray',
        borderRadius: '16px',
        gap: 2,
      }}
    >
      <Typography variant="h5" mb={4}>
        Thông tin đơn hàng
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Người nhận
        </Typography>
        <Typography>{props.orderItem.name}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Điện thoại
        </Typography>
        <Typography>{props.orderItem.numberPhone}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Email
        </Typography>
        <Typography>{props.orderItem.email}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Địa chỉ
        </Typography>
        <Typography>{props.orderItem.address}</Typography>
      </Box>
    </Box>
  );
};
