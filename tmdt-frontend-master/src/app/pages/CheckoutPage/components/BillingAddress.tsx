import { Box, Typography, createTheme } from '@mui/material';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' } },
});

export const BillingAddress = props => {
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
      }}
    >
      <Typography variant="h5" mb={4}>
        Thông tin nhận hàng
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Người nhận
        </Typography>
        <Typography>Nguyễn Văn A</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Điện thoại
        </Typography>
        <Typography>0123456789</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Email
        </Typography>
        <Typography>nguyenvana@example.com</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Địa chỉ
        </Typography>
        <Typography>
          268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh
        </Typography>
      </Box>
    </Box>
  );
};
