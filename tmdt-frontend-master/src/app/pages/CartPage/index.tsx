import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import { CartItemGroup, CartOrderDetails } from './components';
import { CartBreadcrumbs } from './components/CartBreadcrumbs';
import { CartItemsContext } from './context';

export const CartPage = props => {
  const cartItemsContext = useContext(CartItemsContext);
  const cartItems = cartItemsContext.cartItems;
  const removeItem = cartItemsContext.removeCartItem;
  const addItem = cartItemsContext.addCartItem;
  const subtractItem = cartItemsContext.subtractCartItem;
  const clearItem = cartItemsContext.clearCartItems;

  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <CartBreadcrumbs />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CartItemGroup
              cartItems={cartItems}
              removeCartItem={removeItem}
              addCartItem={addItem}
              subtractCartItem={subtractItem}
              clearCartItems={clearItem}
            />
          </Grid>
          <Grid item xs={4}>
            <CartOrderDetails cartItems={cartItems} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
