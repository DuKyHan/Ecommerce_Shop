import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { ProductMainSectionOptionsProps } from '../types';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' } },
});

export const ProductMainSectionOptions = (
  props: ProductMainSectionOptionsProps,
) => {
  const selectedQuantity = props.selectedQuantity;
  const selectedSize = props.selectedSize;
  const selectedColor = props.selectedColor;
  const setSelectedQuantity = props.setSelectedQuantity;
  const setSelectedSize = props.setSelectedSize;
  const setSelectedColor = props.setSelectedColor;

  const sizes = ['M', 'L', 'XL', 'XXL'];
  const selectedSizeReal = selectedSize ? selectedSize : sizes[0];

  const colors = ['Vàng', 'Xanh', 'Đen', 'Trắng'];
  const selectedColorReal = selectedColor ? selectedColor : colors[0];

  return (
    <ThemeProvider theme={primaryBlack}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <Typography>Số lượng</Typography>
          <Box my={2}>
            <ButtonGroup variant="outlined">
              <Button
                onClick={() => {
                  if (selectedQuantity - 1 < 1) {
                    return;
                  }
                  setSelectedQuantity(selectedQuantity - 1);
                }}
              >
                -
              </Button>
              <Button>{selectedQuantity}</Button>
              <Button
                onClick={() => {
                  if (selectedQuantity + 1 > 200) {
                    return;
                  }
                  setSelectedQuantity(selectedQuantity + 1);
                }}
              >
                +
              </Button>
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
                <Button
                  variant={size === selectedSizeReal ? 'contained' : undefined}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
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
            <Select
              value={selectedColorReal}
              fullWidth
              size="small"
              onChange={value => setSelectedColor(value.target.value)}
            >
              {colors.map(e => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
