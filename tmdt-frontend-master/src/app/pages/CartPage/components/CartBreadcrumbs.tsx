import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';

export const CartBreadcrumbs = props => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      <Link underline="hover" color="primary" href="/cart">
        Giỏ hàng
      </Link>
    </Breadcrumbs>
  );
};
