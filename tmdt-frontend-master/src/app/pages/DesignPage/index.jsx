import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Edit from './Edit';
import { DesignBreadcrumbs } from './components/DesignBreadcrumb';
import './index.css';

export function DesignPage() {
  return (
    <>
      <Helmet>
        <title>Design</title>
        <meta name="description" content="Design Page for Davies Fashion" />
      </Helmet>
      <Container>
        <Box my={3}>
          <Box mt={3}>
            <DesignBreadcrumbs />
          </Box>
          <Box mt={4} mb={6}>
            <Edit />
          </Box>
        </Box>
      </Container>
    </>
  );
}
