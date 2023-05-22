import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';

export const ProductsBreadcrumbs = props => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      <Link underline="hover" color="primary" href="/products">
        Sản phẩm
      </Link>
    </Breadcrumbs>
  );
};
