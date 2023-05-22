import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';

export const DesignBreadcrumbs = props => {
  const page = props.page;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      <Link underline="hover" color="primary" href="/design">
        Thiết kế
      </Link>
    </Breadcrumbs>
  );
};
