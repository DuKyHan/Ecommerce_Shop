import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const PostCheckoutPage = props => {
  const state: any = useLocation().state;
  const navigate = useNavigate();

  // if (state === null) {
  //   return <Navigate to={'/'}></Navigate>;
  // }

  const isSuccessful = state?.isSuccessful ?? true;
  if (!isSuccessful) {
    return (
      <Container>
        <Box
          mx={32}
          my={16}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 1,
            borderColor: 'gray',
            borderRadius: '16px',
            p: 16,
          }}
          justifyItems={'center'}
        >
          <Typography variant="h4" align="center" color={'error'}>
            Thanh toán thất bại
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Button variant="contained" onClick={() => navigate('/')}>
            Quay về trang chủ
          </Button>
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <Box
        mx={32}
        my={16}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: 1,
          borderColor: 'gray',
          borderRadius: '16px',
          p: 16,
        }}
        justifyItems={'center'}
      >
        <Typography variant="h4" align="center" color={'primary'}>
          Thanh toán thành công
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Button variant="contained" onClick={() => navigate('/')}>
          Quay về trang chủ
        </Button>
      </Box>
    </Container>
  );
};
