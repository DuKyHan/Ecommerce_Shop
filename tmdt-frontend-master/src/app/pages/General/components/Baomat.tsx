import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Baomat() {
  const color = '#4737FF';

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        color={color}
        sx={{ fontWeight: 700, fontSize: 22, mb: 2 }}
      >
        Chính sách bảo mật
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1 }}
      >
        CHÚNG TÔI THU NHẬP NHỮNG THÔNG TIN NÀO?
      </Typography>
      <Typography>
        Chúng tôi thu thập thông tin từ bạn khi bạn đăng ký trên trang web của
        chúng tôi, đặt hàng, đăng ký nhận bản tin của chúng tôi hoặc điền vào
        một biểu mẫu.
      </Typography>
      <Typography>
        Khi đặt hàng hoặc đăng ký trên trang web của chúng tôi, bạn có thể được
        yêu cầu nhập của bạn: tên, địa chỉ email hoặc địa chỉ gửi thư. Bạn có
        thể truy cập trang web của chúng tôi nặc danh.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        CHÚNG TÔI SỬ DỤNG THÔNG TIN CỦA BẠN CHO NHỮNG MỤC ĐÍCH GÌ?
      </Typography>
      <Typography>
        Bất kỳ thông tin chúng tôi thu thập từ bạn có thể được sử dụng theo một
        trong các cách sau đây:
        <li>
          Để cá nhân hóa trải nghiệm của bạn (thông tin của bạn sẽ giúp chúng
          tôi đáp ứng tốt hơn nhu cầu cá nhân của bạn).
        </li>
        <li>
          Để cải thiện trang web của chúng tôi (chúng tôi liên tục cố gắng để
          cải thiện các dịch trang web của chúng tôi dựa trên những thông tin và
          phản hồi chúng tôi nhận được từ bạn).
        </li>
        <li>
          Để cải thiện dịch vụ khách hàng (thông tin của bạn sẽ giúp chúng tôi
          để có hiệu quả hơn để đáp ứng yêu cầu dịch vụ khách hàng của bạn và
          nhu cầu hỗ trợ).
        </li>
        <li>Để xử lý các giao dịch.</li>
      </Typography>
      <Typography>
        Thông tin của bạn, dù công khai hay ẩn danh, sẽ không được bán, trao
        đổi, chuyển nhượng, hoặc cho bất kỳ công ty nào khác với bất kỳ lý do
        nào, mà không có sự đồng ý của bạn, khác hơn là cho mục đích rõ ràng của
        việc cung cấp các sản phẩm mua hoặc dịch vụ yêu cầu.
      </Typography>
      <li>
        Để quản lý một cuộc thi, khuyến mãi, khảo sát, tính năng trang web khác.
      </li>
      <li>Để gửi email định kỳ.</li>
      <li>
        Các địa chỉ email mà bạn cung cấp được xử lý, có thể được sử dụng để gửi
        cho bạn các thông tin và cập nhật liên quan đến đặt hàng của bạn, ngoài
        việc tiếp nhận thông tin mới từ công, cập nhật, sản phẩm hoặc dịch vụ có
        liên quan thường xuyên, vv…
      </li>
      <li>
        Lưu ý: Nếu bất cứ lúc nào bạn muốn hủy đăng ký bạn có thực hiện từ phần
        hủy đăng ký nhận email trong tương lai, chúng được bố trí ở dưới cùng
        của mỗi email.
      </li>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        CHÚNG TÔI BẢO VỆ THÔNG TIN CỦA BẠN NHƯ THẾ NÀO?
      </Typography>
      <Typography>
        Chúng tôi thực hiện một loạt các biện pháp an ninh để duy trì sự an toàn
        của thông tin cá nhân của bạn khi bạn đặt hàng hoặc nhập, gửi, hoặc truy
        cập thông tin cá nhân của bạn.
      </Typography>
      <Typography>
        Chúng tôi cung cấp việc sử dụng một máy chủ an toàn. Tất cả các thông
        tin nhạy cảm cung cấp được truyền qua Bảo mật (SSL) công nghệ Socket và
        sau đó mã hóa thành cơ sở dữ liệu các nhà cung cấp cổng thanh toán của
        chúng tôi chỉ có thể truy cập bởi những người được ủy quyền có quyền
        truy cập đặc biệt tới hệ thống như vậy, và được yêu cầu để giữ cho các
        thông tin bí mật.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        CHÚNG TÔI SỬ DỤNG COOKIES?
      </Typography>
      <Typography>
        Có (Cookie là những file nhỏ mà một trang web hoặc dịch vụ của nhà cung
        cấp của nó lưu ở máy tính của bạn trong ổ cứng thông qua trình duyệt Web
        của bạn (nếu bạn cho phép) cho phép các trang web hoặc các hệ thống cung
        cấp dịch vụ để nhận ra trình duyệt và máy tính của bạn và ghi nhớ thông
        tin nhất định).
      </Typography>
      <Typography>
        Chúng tôi sử dụng cookies để giúp chúng ta nhớ và xử lý các mặt hàng
        trong giỏ hàng của bạn, hiểu và lưu các sở thích của bạn cho lần truy
        cập sau và theo dõi các quảng cáo.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        DO CHÚNG TÔI TIẾT LỘ BẤT CỨ THÔNG TIN CHO BÊN NGOÀI?
      </Typography>
      <Typography>
        Chúng tôi không bán, thương mại, hoặc chuyển giao cho bên ngoài những
        thông tin cá nhân của bạn. Điều này không bao gồm các bên thứ ba đáng
        tin, người hỗ trợ chúng tôi trong việc điều hành trang web của chúng
        tôi, hoạt động kinh doanh của chúng tôi, hoặc phục vụ bạn, miễn là các
        bên đồng ý giữ bí mật thông tin này. Chúng tôi cũng có thể tiết lộ thông
        tin của bạn khi chúng tôi tin rằng việc này là tuân thủ pháp luật, thực
        thi chính sách trang web của chúng tôi, hay bảo vệ mọi người hoặc một
        người về quyền tài sản, hoặc sự an toàn. Tuy nhiên, thông tin không nhận
        dạng cá nhân có thể được cung cấp cho các bên khác để tiếp thị, quảng
        cáo, hoặc sử dụng khác.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        LIÊN KẾT CỦA BÊN THỨ BA
      </Typography>
      <Typography>
        Chúng tôi có thể cung cấp sản phẩm của bên thứ ba trên trang web của
        chúng tôi. Những trang web của bên thứ ba có chính sách bảo mật riêng
        biệt và độc lập. Do đó chúng tôi không có trách nhiệm hoặc trách nhiệm
        đối với các nội dung và hoạt động của các trang web liên kết. Tuy nhiên,
        chúng tôi tìm cách để bảo vệ sự toàn vẹn của trang web của chúng tôi và
        hoan nghênh bất kỳ thông tin phản hồi về các trang web này.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        CHÍNH SÁCH CHỈ ÁP DỤNG WEBSITE TRỰC TUYẾN
      </Typography>
      <Typography>
        Chính sách bảo mật trực tuyến này chỉ áp dụng cho các thông tin thu thập
        được thông qua trang web của chúng tôi và không cho thông tin thu thập
        được ẩn.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        SỰ ĐỒNG Ý CỦA BẠN
      </Typography>
      <Typography>
        Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với chính sách bảo
        mật của chúng tôi.
      </Typography>
      <Typography
        variant="h3"
        color={color}
        sx={{ fontWeight: 600, fontSize: 16, mb: 1, mt: 1 }}
      >
        THAY ĐỔI CHÍNH SÁCH MẬT CỦA CHÚNG TÔI
      </Typography>
      <Typography>
        Nếu chúng tôi quyết định thay đổi chính sách bảo mật của chúng tôi,
        chúng tôi sẽ đăng những thay đổi trên trang này.
      </Typography>
    </Box>
  );
}
