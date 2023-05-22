import { NavigateNext } from '@mui/icons-material';
import {
  Box,
  CardActionArea,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import Image from 'mui-image';
import { Product } from '../../../../data';

export interface ProductCardProps {
  product: Product;
  contentHeight?: any;
  imageHeight?: any;
  width?: any;
  titleTextVariant?: Variant;
  priceTextVariant?: Variant;
  isHot?: boolean;
  showNextButton?: boolean;
  discountBadge?: DiscountBadgeProps;
}

export interface DiscountBadgeProps {
  show?: boolean;
  width?: any;
  height?: any;
  topMargin?: any;
  rightMargin?: any;
}

export const ProductCard = (props: ProductCardProps) => {
  const imageHeight = props.imageHeight ?? 280;
  const contentHeight = props.contentHeight ?? 150;
  const product = props.product;

  return (
    <Box
      height={imageHeight + contentHeight}
      sx={{ border: 1, borderColor: 'lightgray', borderRadius: '16px' }}
    >
      <CardActionArea
        href={`/product/${product.id}`}
        disableRipple={true}
        disableTouchRipple={true}
      >
        <Box height={imageHeight} position={'relative'}>
          <Image
            src={product.image}
            alt="Item"
            fit="cover"
            easing="linear"
            duration={1000}
            style={{ borderRadius: '16px 16px 0 0' }}
          />
          {props.discountBadge && product.discount > 0 ? (
            <Box
              width={props.discountBadge.width ?? 60}
              height={props.discountBadge.height ?? 40}
              bgcolor={'black'}
              position={'absolute'}
              sx={{
                zIndex: 'modal',
                position: 'absolute',
                right: props.discountBadge.rightMargin ?? '16px',
                top: props.discountBadge.topMargin ?? '16px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight={'bold'} color={'white'}>
                -{product.discount * 100}%
              </Typography>
            </Box>
          ) : null}
        </Box>
        <Box
          height={contentHeight}
          p={2}
          sx={{
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography
              variant={props.titleTextVariant ?? 'h6'}
              fontWeight={'bold'}
            >
              {product.name}
            </Typography>
            {props.isHot ? (
              <Box ml={1}>
                <Chip label="Hot" color="error" size="small" />
              </Box>
            ) : null}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            my={1}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: '8px',
              }}
            >
              <Typography
                variant={props.priceTextVariant ?? 'h5'}
                color={'error'}
                fontWeight={'bold'}
              >
                {Math.trunc(
                  product.price - product.price * product.discount,
                ).toLocaleString()}
                đ
              </Typography>
              {product.discount > 0 ? (
                <Typography
                  variant="subtitle1"
                  color={'gray'}
                  sx={{ textDecoration: 'line-through' }}
                >
                  {product.price.toLocaleString()}đ
                </Typography>
              ) : null}
            </Box>
            {props.showNextButton ? (
              <IconButton>
                <NavigateNext color={'action'} />
              </IconButton>
            ) : null}
          </Box>

          <Typography>Mua Ngay</Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
};
