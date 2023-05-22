import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';

export const CheckoutBreadcrumbs = props => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      <Link underline="hover" color="primary" href="/checkout">
        Thanh toán
      </Link>
    </Breadcrumbs>
  );
};
