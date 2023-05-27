import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import Image from 'mui-image';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Checkbox, List, ListItemButton, ListItemText } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { CartItemQuantity, CartItemPrice } from '../CartPage/components';
import {
  removeCartItem,
  addCartItem,
  subtractCartItem,
} from '../CartPage/data';
import { ProductItem } from './components/ProductItem';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 700,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export function ProductList() {
  const [text, setText] = React.useState('');
  const [content, setContent] = React.useState<any[]>([]);
  const handleSent = value => {
    setText('');
    setContent(oldArray => [...oldArray, value]);
  };

  return (
    <Box sx={{ flexGrow: 1, width: 857 }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={600} color={'#4737FF'}>
            Sản phẩm
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
            <ProductItem />
            {/* {!detail && <DetailProduct />} */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Grid>
          <Divider sx={{ ml: 0.2 }} orientation="vertical" />
          <Grid item xs={3.5}>
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
              // selected={value === 0}
              // onClick={() => handleChange(0)}
              >
                <ListItemText primary="Thêm sản phẩm" />
              </ListItemButton>
              <ListItemButton
              // selected={value === 1}
              // onClick={() => handleChange(1)}
              >
                <ListItemText primary="Xóa sản phẩm" />
              </ListItemButton>
              <ListItemButton
              // selected={value === 2}
              // onClick={() => handleChange(2)}
              >
                <ListItemText primary="Chỉnh sửa sản phẩm " />
              </ListItemButton>
              <ListItemButton
              // selected={value === 3}
              // onClick={() => handleChange(3)}
              >
                <ListItemText primary="Xem chi tiết sản phẩm" />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
