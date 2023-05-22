import { Close } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { CartItemsContext } from 'app/pages/CartPage/context';
import Image from 'mui-image';
import { useContext, useState } from 'react';
import { ProductMainSectionProps } from '../types';
import { ProductMainSectionName } from './ProductMainSectionName';
import { ProductMainSectionOptions } from './ProductMainSectionOptions';
import { ProductMainSectionPrice } from './ProductMainSectionPrice';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' }, secondary: { main: '#FFFFFF' } },
});

export const ProductMainSection = (props: ProductMainSectionProps) => {
  const borderRadius = '16px';
  const height = 460;
  const product = props.product;

  const cartItemsContext = useContext(CartItemsContext);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectColor] = useState<string | undefined>();
  const [selectedQuantity, setSelectQuantity] = useState<number>(1);
  const [notificationOpened, setNotificationOpened] = useState<boolean>(false);

  const closeNotification = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationOpened(false);
  };

  return (
    <Box
      sx={{ border: 1, borderRadius: borderRadius, borderColor: 'lightgray' }}
    >
      <Snackbar
        open={notificationOpened}
        autoHideDuration={3000}
        onClose={closeNotification}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 8 }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeNotification}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={closeNotification}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thêm sản phẩm vào giỏ hàng thành công
        </Alert>
      </Snackbar>
      <Grid container height={height}>
        <Grid item xs={4}>
          <Box
            height={height}
            sx={{
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            }}
          >
            <Image
              src={product.image}
              alt="Promotional Product"
              fit="cover"
              easing="linear"
              duration={1000}
              style={{ borderRadius: `${borderRadius} 0 0 ${borderRadius}` }}
            ></Image>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box p={3}>
            <ProductMainSectionName product={product} />
            <Box mt={1} mb={2}>
              <Divider />
            </Box>
            <ProductMainSectionPrice product={product} />
            <Box mt={2} mb={2}>
              <Divider />
            </Box>
            <ProductMainSectionOptions
              product={product}
              selectedQuantity={selectedQuantity}
              setSelectedQuantity={setSelectQuantity}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
              setSelectedColor={setSelectColor}
            />
            <Box
              sx={{
                display: 'flex',
              }}
              my={6}
              gap={3}
            >
              <ThemeProvider theme={primaryBlack}>
                <Button variant="contained">
                  <Typography variant="subtitle1" fontWeight={'medium'}>
                    Mua ngay
                  </Typography>
                </Button>
              </ThemeProvider>

              <Button
                variant="contained"
                onClick={() => {
                  cartItemsContext.addCartItem({
                    ...product,
                    size: selectedSize || 'M',
                    color: selectedColor || 'Vàng',
                    quantity: selectedQuantity,
                  });
                  setNotificationOpened(true);
                }}
              >
                <Typography variant="subtitle1" fontWeight={'medium'}>
                  Thêm vào giỏ hàng
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
