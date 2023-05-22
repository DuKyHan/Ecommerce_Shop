import { Box, Button, TextField, Typography } from '@mui/material';

export const ContactUsForm = props => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={'bold'}>
        Cần trợ giúp
      </Typography>
      <Typography my={2} color={'dimgray'}>
        Hãy nhập các thông tin dưới đây. Chúng tôi sẽ sớm liên lạc với bạn
      </Typography>
      <TextField
        fullWidth
        label="Họ và tên"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="Email" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Số điện thoại"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Câu hỏi"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Box my={5}>
        <Button fullWidth variant="contained">
          Gửi
        </Button>
      </Box>
    </Box>
  );
};
