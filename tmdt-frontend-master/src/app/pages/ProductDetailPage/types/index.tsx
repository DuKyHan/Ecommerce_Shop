import { Product } from 'data';

export interface ProductProps {
  product: Product;
}

export interface ProductMainSectionProps extends ProductProps {}

export interface ProductMainSectionOptionsProps
  extends ProductMainSectionProps {
  selectedSize?: string;
  selectedColor?: string;
  selectedQuantity: number;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
  setSelectedQuantity: (quantity: number) => void;
}

export interface ProductDetailBreadcrumbsProps extends ProductProps {}

export interface ProductDescriptionSectionProps extends ProductProps {}
