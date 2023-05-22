import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Doitra() {
  const color = '#4737FF';

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        color={color}
        sx={{ fontWeight: 700, fontSize: 22, mb: 2 }}
      >
        Chính sách đổi trả
      </Typography>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        I/ Quy Định Đổi Hàng.
      </Typography>
      <Typography>
        <b>Chính sách áp dụng:</b> Áp dụng 01 lần đổi/01 đơn hàng.
      </Typography>
      <li>
        Sản phẩm nguyên giá được đổi sang sản phẩm nguyên giá khác còn hàng.
        Khách hàng thanh toán số tiền chênh lệch nếu giá trị sản phẩm đổi lớn
        hơn. Không hoàn trả lại tiền thừa dưới bất kỳ hình thức nào.
      </li>
      <li>
        Sản phẩm giảm giá đến 30% được đổi màu/size (nếu còn hàng) hoặc theo quy
        chế từng chương trình (nếu có) - Không hỗ trợ đổi sang sản phẩm khác.
      </li>
      <li>
        Sản phẩm không áp dụng đổi bao gồm: Phụ kiện, sản phẩm giảm giá từ 50%
        trở lên.
      </li>
      <li>Sản phẩm chỉ được đổi một lần duy nhất.</li>
      <Typography>
        <b>Điều kiện đổi sản phẩm:</b>
      </Typography>
      <li>
        Đổi hàng trong vòng 07 ngày kể từ ngày khách hàng nhận được sản phẩm
      </li>
      <li>
        Sản phẩm còn trong tình trạng ban đầu khi nhận hàng, còn nguyên tem và
        nhãn mác.
      </li>
      <li>Sản phẩm chưa qua giặt ủi hoặc bẩn, bị hư hỏng.</li>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        II/ Quy Định Trả Hàng.
      </Typography>
      <Typography>
        <b>Chính sách áp dụng:</b>
      </Typography>
      <li>
        Khách hàng được trả sản phẩm trong trường hợp có lỗi phát sinh từ nhà
        sản xuất và không có nhu cầu đổi sang sản phẩm khác.
      </li>
      <li>Các trường hợp lỗi do nhà sản xuất gồm: phai màu, lỗi chất liệu,…</li>
      <li>Hoàn tiền lại sản phẩm gặp lỗi qua tài khoản ngân hàng.</li>
      <li>Cửa hàng chịu 100% chi phí vận chuyển trả lại hàng.</li>
      <li>
        Cửa hàng sẽ xử lý trong vòng 10 ngày kể từ ngày nhận được sản phẩm lỗi.
      </li>
      <Typography>
        <b>Điều kiện trả sản phẩm:</b>
      </Typography>
      <Typography>
        Trả sản phẩm trong vòng 05 ngày kể từ ngày nhận sản phẩm.
      </Typography>
      <Typography>
        <b>Chính sách hoàn tiền:</b>
      </Typography>
      <li>
        Đối với trường hợp thanh toán trước, khách hàng sẽ được hoàn tiền khi
        hàng nhận bị lỗi do sản xuất và khách hàng trả hàng không có nhu cầu đổi
        sang sản phẩm khác.
      </li>
      <li>
        Thời gian hoàn tiền: từ 07 đến 15 ngày kể từ khi cửa hàng nhận được hàng
        trả từ khách hàng. Tiền được hoàn vào tài khoản cá nhân của khách hàng
        cung cấp.
      </li>
      <Typography
        variant="subtitle1"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        III/ Thực hiện đổi/ trả sản phẩm.
      </Typography>
      <Typography>
        <b>Bước 1:</b> Liên hệ kênh bán hàng online đã đặt hàng để đăng ký đổi
        hàng.
      </Typography>
      <Typography>
        <b>Bước 2:</b> Làm theo hướng dẫn của nhân viên tư vấn.
      </Typography>
      <Typography>
        <b>Bước 3:</b> Đóng gói sản phẩm, quà khuyến mại (nếu có) kèm theo hoá
        đơn GTGT nếu có.
      </Typography>
      <Typography>
        <b>Bước 4:</b> Gởi về địa chỉ Công ty TNHH thời trang H và A, đường Tạ
        Quang Bửu, Linh Trung, TP Thủ Đức, TPHCM. và chờ xác nhận từ bộ phận bán
        hàng online.
      </Typography>
      <Typography>Số điện thoại liên hệ: 0971667308</Typography>
    </Box>
  );
}
