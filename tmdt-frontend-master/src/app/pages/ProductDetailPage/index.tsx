import { Box, Container, Divider } from '@mui/material';
import { allProductData } from 'data';
import { useParams } from 'react-router-dom';
import {
  ProductDescriptionSection,
  ProductDetailBreadcrumbs,
  ProductMainSection,
  ProductSimilarProduct,
} from './components';

export const ProductDetailPage = props => {
  const { id } = useParams();
  const product = allProductData.find(item => item.id === id);

  if (product == null) {
    return <></>;
  }

  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <ProductDetailBreadcrumbs product={product} />
        </Box>
        <Box my={6}>
          <ProductMainSection product={product} />
        </Box>
        <Box my={9}>
          <Divider />
        </Box>
        <ProductDescriptionSection product={product} />
        <Box my={9}>
          <Divider />
        </Box>
        <ProductSimilarProduct product={product} />
      </Box>
    </Container>
  );
};
