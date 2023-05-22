import { LocationOnOutlined } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

export const StoreLocation = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={'bold'}>
        Liên hệ trực tiếp
      </Typography>
      <Typography my={2} color={'dimgray'}>
        Bạn có thể đến cửa hàng của chúng tôi tại
      </Typography>
      <Box my={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Thành phố Hồ Chí Minh"
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondary="268 Lý Thường Kiệt, Phường 14, Quận 10"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Hà Nội"
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondary="1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
