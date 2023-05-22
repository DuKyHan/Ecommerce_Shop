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
import PromotionalProductImage from 'assets/promotional-product.png';
import Image from 'mui-image';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' }, secondary: { main: '#FFFFFF' } },
});

export const PromotionalCard = props => {
  const borderRadius = '16px';
  const height = 350;
  return (
    <CardActionArea
      href="/product/1"
      disableRipple={true}
      disableTouchRipple={true}
    >
      <Box
        sx={{ border: 1, borderRadius: borderRadius, borderColor: 'lightgray' }}
      >
        <Grid container height={height}>
          <Grid item xs={6}>
            <Box
              bgcolor={'#FFEDEB'}
              height={height}
              p={3}
              sx={{
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box mb={2}>
                  <Typography variant="h3">Sale 4/4</Typography>
                  <Typography variant="h3" fontWeight={'bold'}>
                    Giảm giá đến 90%
                  </Typography>
                </Box>

                <Typography color={'dimgray'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <Box my={1}>
                <ThemeProvider theme={primaryBlack}>
                  <Button variant="contained">
                    <NavigateNext color={'secondary'} />
                    Xem ngay
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              height={height}
              sx={{
                borderTopRightRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
              }}
            >
              <Image
                src={PromotionalProductImage}
                alt="Promotional Product"
                fit="cover"
                easing="linear"
                duration={1000}
                style={{ borderRadius: '0 16px 16px 0' }}
              ></Image>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CardActionArea>
  );
};
