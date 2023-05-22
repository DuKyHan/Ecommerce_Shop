import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BillingAddress,
  CheckoutBreadcrumbs,
  ItemGroup,
  OrderSummary,
  PaymentMethod,
} from './components';
import { EPaymentMethod } from './types';

export const CheckoutPage = props => {
  const [paymentMethod, setPaymentMethod] = useState(EPaymentMethod.Cod);

  const locationState: any = useLocation().state;
  if (locationState == null || !locationState.cartItems) {
    return <Box></Box>;
  }

  const cartItems = locationState.cartItems;

  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <CheckoutBreadcrumbs />
        </Box>
        <Grid container spacing={2} alignItems={'stretch'} sx={{ my: 1 }}>
          <Grid item xs={8}>
            <BillingAddress />
          </Grid>
          <Grid item xs={4}>
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={8}>
            <ItemGroup cartItems={cartItems} />
          </Grid>
          <Grid item xs={4}>
            <OrderSummary cartItems={cartItems} paymentMethod={paymentMethod} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
