import { Box, Container } from '@mui/material';
import {
  BrandList,
  ContactUs,
  DesignCard,
  HomeBreadcrumbs,
  IntroductionCard,
} from './components';

export function HomePage() {
  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <HomeBreadcrumbs />
        </Box>
        <Box my={6}>
          <IntroductionCard />
        </Box>
        <Box my={16}>
          <BrandList />
        </Box>
        <Box my={16}>
          <DesignCard />
        </Box>
        <Box my={16}>
          <ContactUs />
        </Box>
      </Box>
    </Container>
  );
}
