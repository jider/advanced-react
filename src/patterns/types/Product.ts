import type {CSSProperties, ReactElement} from 'react'

export interface ProductCardProps {
  children?: ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: OnProductChange
  value?: number
}

export interface ProductButtonsProps {
  className?: string
  style?: CSSProperties;
}

export interface ProductImageProps {
  className?: string
  img?: string;
  title?: string;
  style?: CSSProperties;
}

export interface ProductTitleProps {
  className?: string
  title?: string;
  activeClassName?: string
  style?: CSSProperties;
}

export interface ProductCardHOCProps {
  Buttons: (props: ProductButtonsProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;

  (props: ProductCardProps): JSX.Element;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCtx {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface OnProductChangeArgs {
  product: Product
  count: number
}

export type OnProductChange = ({product, count}: OnProductChangeArgs) => void
