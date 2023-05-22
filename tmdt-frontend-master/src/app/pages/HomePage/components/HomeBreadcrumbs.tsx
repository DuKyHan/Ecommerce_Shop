import { Home } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

export const HomeBreadcrumbs = props => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="primary" href="/">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Home />
          <Typography mx={1}>Trang chủ</Typography>
        </Box>
      </Link>
    </Breadcrumbs>
  );
};
