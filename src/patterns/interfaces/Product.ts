import {ReactElement} from 'react'

export interface ProductCardProps {
  children?: ReactElement[];
  product: Product
}

export interface ProductCardHOCProps {
  Buttons: () => JSX.Element;
  Image: ({img, title}: { img?: string, title?: string }) => JSX.Element;
  Title: ({title}: { title?: string }) => JSX.Element;

  ({children, product}: ProductCardProps): JSX.Element;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCtx {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product
}
