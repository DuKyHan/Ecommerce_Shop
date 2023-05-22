import {
  Box,
  Button,
  ButtonGroup,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { CartItemProps } from '../types';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' } },
});

export const CartItemQuantity = (props: CartItemProps) => {
  const cartItem = props.cartItem;
  const quantity = cartItem.quantity;
  const addCartItem = props.addCartItem;
  const subtractCartItem = props.subtractCartItem;

  return (
    <ThemeProvider theme={primaryBlack}>
      <Box my={2}>
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => {
              if (quantity - 1 < 1) {
                return;
              }
              subtractCartItem();
            }}
          >
            -
          </Button>
          <Button>{quantity}</Button>
          <Button
            onClick={() => {
              if (quantity + 1 > 200) {
                return;
              }
              addCartItem();
            }}
          >
            +
          </Button>
        </ButtonGroup>
      </Box>
    </ThemeProvider>
  );
};
