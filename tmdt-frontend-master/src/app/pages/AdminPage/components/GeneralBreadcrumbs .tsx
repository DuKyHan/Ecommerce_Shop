import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';

export const GeneralBreadcrumbs = props => {
  const page = props.page;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      {page === 0 ? (
        <Link underline="hover" color="primary" href="/general">
          Thông tin
        </Link>
      ) : (
        <Link underline="hover" color="inherit" href="/general">
          Thông tin
        </Link>
      )}
      {page === 1 && (
        <Link underline="hover" color="primary" href="/general/support">
          Sản phẩm
        </Link>
      )}
      {page === 2 && (
        <Link underline="hover" color="primary" href="/general/policy">
          Đơn hàng
        </Link>
      )}
      {page === 3 && (
        <Link underline="hover" color="primary" href="/general/login">
          .
        </Link>
      )}
    </Breadcrumbs>
  );
};
