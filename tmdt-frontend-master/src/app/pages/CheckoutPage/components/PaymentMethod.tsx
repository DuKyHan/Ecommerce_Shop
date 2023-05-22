import { CheckCircle, LocalShipping } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import PaypalImage from 'assets/paypal.png';
import Image from 'mui-image';
import {
  EPaymentMethod,
  PaymentMethodButtonProps,
  PaymentMethodProps,
} from '../types';

export const PaymentMethod = (props: PaymentMethodProps) => {
  const paymentMethod = props.paymentMethod;
  const setPaymentMethod = props.setPaymentMethod;

  return (
    <Box
      p={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: 'lightgray',
        borderRadius: '16px',
        gap: 2,
        height: '100%',
      }}
    >
      <Typography variant="h5" mb={4}>
        Phương thức thanh toán
      </Typography>

      <PaymentMethodItem
        paymentMethod={EPaymentMethod.Cod}
        currentPaymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        title={'Thanh toán khi nhận hàng'}
      />
      <PaymentMethodItem
        paymentMethod={EPaymentMethod.PayPal}
        currentPaymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        imageSrc={PaypalImage}
        title={'Thanh toán bằng Paypal'}
      />
    </Box>
  );
};

export const PaymentMethodItem = (props: PaymentMethodButtonProps) => {
  const currentPaymentMethod = props.currentPaymentMethod;
  const paymentMethod = props.paymentMethod;
  const setPaymentMethod = props.setPaymentMethod;
  const imageSrc = props.imageSrc;
  const title = props.title;

  return (
    <Button
      variant={
        paymentMethod === currentPaymentMethod ? 'contained' : 'outlined'
      }
      sx={{
        p: 2,
        border: 1,
        borderColor: 'lightgray',
        borderRadius: '16px',
      }}
      onClick={() => setPaymentMethod(paymentMethod)}
    >
      {imageSrc == null ? (
        <LocalShipping
          htmlColor={
            paymentMethod !== currentPaymentMethod ? 'dimgray' : undefined
          }
        />
      ) : (
        <Image
          width={24}
          src={PaypalImage}
          duration={0}
          bgColor="transparent"
        />
      )}

      <Typography
        ml={3}
        sx={{ display: 'flex', flexGrow: 1 }}
        textTransform={'none'}
        color={paymentMethod === currentPaymentMethod ? 'white' : 'dimgray'}
      >
        {title}
      </Typography>
      {paymentMethod === currentPaymentMethod ? (
        <CheckCircle htmlColor="white" />
      ) : undefined}
    </Button>
  );
};
