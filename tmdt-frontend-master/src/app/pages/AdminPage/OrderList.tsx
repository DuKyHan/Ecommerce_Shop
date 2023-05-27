import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardHeader, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { OrderItem } from './components/OrderItem';
import { useEffect, useState } from 'react';
import { axiosClient } from 'data';

export function OrderList(props) {
  const [value, setValue] = useState(props.page);
  const [orderlist, setOrderlist] = useState([]);
  const navigate = useNavigate();
  const handleChange = newValue => {
    setValue(newValue);
  };
  useEffect(() => {
    axiosClient.get('/order').then(data => setOrderlist(data.data));
  }, []);
  // const orderlist = [
  //   {
  //     name: 'Nguyễn Văn A',
  //     numberPhone: '0123456789',
  //     email: 'nguyenvana@example.com',
  //     address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
  //   },
  //   {
  //     name: 'Nguyễn Văn B',
  //     numberPhone: '0123456789',
  //     email: 'nguyenvana@example.com',
  //     address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
  //   },
  //   {
  //     name: 'Nguyễn Văn C',
  //     numberPhone: '0123456789',
  //     email: 'nguyenvana@example.com',
  //     address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
  //   },
  //   {
  //     name: 'Nguyễn Văn D',
  //     numberPhone: '0123456789',
  //     email: 'nguyenvana@example.com',
  //     address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
  //   },
  // ];
  return (
    <Box sx={{ flexGrow: 1, width: 857 }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={600} color={'#4737FF'}>
            Đơn hàng
          </Typography>
        }
      />
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          width: '100%',
          p: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8.2} sx={{ ml: 1, mr: 1 }}>
            {orderlist.length === 0 ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
                <Typography variant="h5">Đơn hàng trống</Typography>
              </Box>
            ) : (
              orderlist.map((item, index) => (
                <Box my={1} key={index}>
                  <OrderItem orderItem={item} />
                </Box>
              ))
            )}
            {/* {policy[value]} */}
          </Grid>
          <Divider sx={{ ml: 0.2 }} orientation="vertical" />
          <Grid item xs={3.5}>
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={value === 0}
                onClick={() => handleChange(0)}
              >
                <ListItemText primary="Thêm đơn hàng" />
              </ListItemButton>
              <ListItemButton
                selected={value === 1}
                onClick={() => handleChange(1)}
              >
                <ListItemText primary="Xóa đơn hàng" />
              </ListItemButton>
              <ListItemButton
                selected={value === 2}
                onClick={() => handleChange(2)}
              >
                <ListItemText primary="Chỉnh sửa đơn hàng" />
              </ListItemButton>
              <ListItemButton
                selected={value === 3}
                onClick={() => handleChange(3)}
              >
                <ListItemText primary="Xem chi tiết đơn hàng" />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
