import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';
import { categoryData } from 'data';
import { ProductDetailBreadcrumbsProps } from '../types';

export const ProductDetailBreadcrumbs = (
  props: ProductDetailBreadcrumbsProps,
) => {
  const product = props.product;
  const category = categoryData.find(
    item => item.id.toString() === props.product.categoryId,
  );
  const categoryName = category?.name ?? 'Tất cả sản phẩm';

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Home />
      </Link>
      <Link underline="hover" color="primary" href="/products">
        Sản phẩm
      </Link>
      <Link underline="hover" color="primary" href={`/`}>
        {categoryName}
      </Link>
      <Link underline="none" color="dimgray">
        {product.name}
      </Link>
    </Breadcrumbs>
  );
};
