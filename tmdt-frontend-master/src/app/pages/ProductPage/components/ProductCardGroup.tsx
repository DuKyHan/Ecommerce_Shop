import { Box, Grid } from '@mui/material';
import { Product } from '../../../../data';
import { ProductCard, ProductCardProps } from './ProductCard';

export const ProductCardGroup = (props: ProductCardGroupProps) => {
  if (!props.items) {
    return <></>;
  }
  const itemsPerLine = props.itemsPerLine ?? 5;
  return (
    <Box>
      <Grid container my={props.my} rowSpacing={2} columnSpacing={2}>
        {props.items.map((item, index) => (
          <Grid item xs={12 / itemsPerLine}>
            <ProductCard key={index} {...props.cardProps} product={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export interface ProductCardGroupProps {
  cardProps?: Omit<ProductCardProps, 'product'>;
  items?: Product[];
  itemsPerLine?: number;
  my?: number;
}
