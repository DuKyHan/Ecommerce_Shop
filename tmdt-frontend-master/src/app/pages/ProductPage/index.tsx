import { Box, Container } from '@mui/material';
import {
  DiscoverProducts,
  PopularProducts,
  ProductsBreadcrumbs,
  PromotionalCard,
} from './components';

export const ProductPage = props => {
  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <ProductsBreadcrumbs />
        </Box>
        <Box my={6}>
          <PromotionalCard />
        </Box>
        <Box my={18}>
          <PopularProducts />
        </Box>
        <Box my={18}>
          <DiscoverProducts />
        </Box>
      </Box>
    </Container>
  );
};
