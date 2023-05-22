import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Vanchuyen() {
  const color = '#4737FF';

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        color={color}
        sx={{ fontWeight: 700, fontSize: 22, mb: 2 }}
      >
        Chính sách vận chuyển
      </Typography>
      <Typography>
        Cửa hàng có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách
        mua hàng trên website, fanpage và gọi điện thoại.
      </Typography>
      <Typography>
        Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông
        qua công ty vận chuyển trung gian.
      </Typography>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        1. Thời gian giao hàng:
      </Typography>
      <li>Đơn hàng nội và ngoại thành TP.HCM:</li>
      <Typography>
        Thời gian giao hàng là 1-2 ngày sau khi đặt hàng. Đơn hang trước 11h30
        trưa thì sẽ giao trong buổi chiều cùng ngày Đơn hàng sau 11h30 sẽ giao
        trong buổi tối và sáng hôm sau.
      </Typography>
      <li>Đơn hàng ở các tỉnh thành khác:</li>
      <Typography>
        Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh thành phố, 3-7 ngày
        đối với khu vực ngoại thành, huyện, xã, thị trấn… (Không tính thứ bảy,
        chủ nhật hay các ngày lễ tết)
      </Typography>
      <Typography>
        Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán hoàn
        tất của quý khách.
      </Typography>
      <Typography>
        Đơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp lần
        đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch
        giao hàng lần 2 với quý khách, trong trường hợp vẫn không thể liên lạc
        lại được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn
        hàng sẽ không còn hiệu lực.
      </Typography>
      <Typography>
        Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui
        lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để
        được kiểm tra.
      </Typography>
      <Typography>
        Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên
        giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao có
        chính xác không. Xin quý khách vui lòng giữ lại biên lại vận chuyển và
        hóa đơn mua hàng để đối chiếu kiểm tra.
      </Typography>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        2. Phí giao hàng:
      </Typography>
      <li>Phí ship cố định là 20,000đ áp dụng cho mọi khu vực</li>
    </Box>
  );
}
