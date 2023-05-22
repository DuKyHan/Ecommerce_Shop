import { Box, Container, Grid } from '@mui/material';
import { ImageFrame, LoginFrame } from './components';

export const LoginPage = props => {
  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <Grid container bgcolor={'#F3F2EF'}>
            <ImageFrame />
            <LoginFrame />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
