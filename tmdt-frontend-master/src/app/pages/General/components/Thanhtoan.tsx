import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Thanhtoan() {
  const color = '#4737FF';

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        color={color}
        sx={{ fontWeight: 700, fontSize: 22, mb: 2 }}
      >
        Chính sách thanh toán
      </Typography>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        THANH TOÁN SAU (COD – GIAO HÀNG VÀ THU TIỀN TẬN NƠI):
      </Typography>
      <Typography>
        Quý khách hàng ở các tỉnh tp trên lãnh thổ Việt Nam, khi nhận hàng và
        kiểm tra hàng xong quý khách sẽ thanh toán tiền mặt cho nhân viên giao
        hàng.
      </Typography>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        THANH TOÁN ONLINE QUA THẺ TÍN DỤNG, CHUYỂN KHOẢN:
      </Typography>
      <Typography>
        Đối với các bạn ở xa Tp Hồ Chí Minh, muốn sử dụng hình thức COD (thanh
        toán khi nhận hàng), các bạn vui lòng liên hệ với BK Robotic để được
        hướng dẫn. Đây là hình thức thanh toán COD (Cash on Delivery) – Các bạn
        sẽ thanh toán trực tiếp cho bên chuyển phát sau khi đã nhận được hàng.
        Với hình thức này, để đảm bảo đơn hàng được xác nhận, BK Robotic có 2
        hình thức mua hàng và thanh toán như sau:BK Robotic chấp nhận hình thức
        thanh toán chuyển khoản ngân hàng, quý khách có thể chuyển khoản vào một
        trong các ngân hàng dưới đây:
      </Typography>
      <Typography>
        <b>Ngân hàng ... – Chi nhánh ... </b>
      </Typography>
      <Typography>
        <b>Tên tài khoản: </b>
      </Typography>
      <Typography>
        <b>Số Tài khoản: </b>
      </Typography>
    </Box>
  );
}
