import { NavigateNext } from '@mui/icons-material';
import {
  Box,
  Button,
  CardActionArea,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import DesignImage from 'assets/design.png';
import Image from 'mui-image';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' }, secondary: { main: '#FFFFFF' } },
});

export const DesignCard = props => {
  const borderRadius = '16px';
  const height = 350;

  return (
    <CardActionArea
      href="/design"
      disableRipple={true}
      disableTouchRipple={true}
    >
      <Box
        sx={{ border: 1, borderRadius: borderRadius, borderColor: 'lightgray' }}
      >
        <Grid container height={height}>
          <Grid item xs={6}>
            <Box
              height={height}
              sx={{
                borderTopRightRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
              }}
            >
              <Image
                src={DesignImage}
                alt="Design Product"
                fit="cover"
                easing="linear"
                duration={1000}
                style={{ borderRadius: '16px 0 0 16px' }}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              bgcolor={'#EAFFFA'}
              height={height}
              p={3}
              sx={{
                borderTopRightRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box mb={2}>
                  <Typography variant="h4" fontWeight={'bold'}>
                    Tùy biến theo phong cách của bạn
                  </Typography>
                </Box>

                <Typography color={'dimgray'}>
                  Thỏa sức sáng tạo và tạo ra những sản phẩm độc đáo với công cụ
                  thiết kế đơn giản và dễ sử dụng của chúng tôi.
                </Typography>
              </Box>
              <Box
                my={1}
                sx={{
                  display: 'flex',
                  gap: 2,
                }}
              >
                <ThemeProvider theme={primaryBlack}>
                  <Button variant="contained">
                    <NavigateNext color={'secondary'} />
                    Thử Ngay
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CardActionArea>
  );
};
