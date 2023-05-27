import { ShareOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
  colors,
} from '@mui/material';
import Image from 'mui-image';
import { sizes } from '../../../../../internals/startingTemplate/src/styles/media';

export const DetailProduct = props => {
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const colors = ['Vàng', 'Xanh', 'Đen', 'Trắng'];
  return (
    <Container
      sx={{
        position: 'Absolute',
        width: '50%',
        bgcolor: '#F7F7FF',
        border: 1,
        borderRadius: '16px',
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Box height={350}>
            <Image
              src={',/item-1.png'}
              alt="Promotional Product"
              fit="cover"
              easing="linear"
              duration={1000}
              style={{ borderRadius: `16 0 0 16` }}
            ></Image>
          </Box>
        </Grid>
        <Grid xs={8}>
          <Box
            my={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight={'bold'}>
                Áo
              </Typography>
              <Box my={2} sx={{ display: 'flex' }}>
                <Typography mr={1}>Thương hiệu: </Typography>
                <Typography color={'primary'}>Golden Accessories</Typography>
              </Box>
            </Box>
            <Box mr={2} sx={{ display: 'flex' }} color={'primary'}>
              <ShareOutlined color="primary" />
              <Typography ml={1} color={'primary'} fontWeight={'medium'}>
                Chia sẻ
              </Typography>
            </Box>
          </Box>
          <Divider flexItem />
          <Box my={1}>
            <Typography color="dimgray">Giá:</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
              }}
              my={1}
            >
              <Typography variant={'h4'} color={'error'} fontWeight={'bold'}>
                {/* {Math.trunc(
            product.price - product.price * product.discount,
          ).toLocaleString()} */}
                1000đ
              </Typography>
              <Typography
                variant="h5"
                color={'gray'}
                sx={{ textDecoration: 'line-through' }}
                ml={2}
              >
                {/* {product.price.toLocaleString()}đ */} 1000Đ
              </Typography>
            </Box>
          </Box>
          <ThemeProvider theme={{}}>
            <Divider flexItem />
            <Box
              mt={1}
              sx={{
                display: 'flex',
              }}
            >
              <Box>
                <Typography>Số lượng</Typography>
                <Box my={2}>
                  <ButtonGroup variant="outlined">
                    <Button>-</Button>
                    <Button> </Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Box>
              </Box>
              <Box
                mx={7}
                sx={{
                  display: 'flex',
                }}
              >
                <Divider orientation="vertical" flexItem />
              </Box>
              <Box>
                <Typography>Kích thước</Typography>
                <Box my={2}>
                  <ButtonGroup variant="outlined">
                    {sizes.map(size => (
                      <Button>{size}</Button>
                    ))}
                  </ButtonGroup>
                </Box>
              </Box>
              <Box
                mx={7}
                sx={{
                  display: 'flex',
                }}
              >
                <Divider orientation="vertical" flexItem />
              </Box>
              <Box>
                <Typography>Màu sắc</Typography>
                <Box my={2}>
                  <Select defaultValue={'Trắng'} fullWidth size="small">
                    {colors.map(e => (
                      <MenuItem value={e}>{e}</MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
};
