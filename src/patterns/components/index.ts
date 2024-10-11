import ProductCardHOC from './ProductCard.tsx'
import ProductTitle from './ProductTitle.tsx'
import ProductImage from './ProductImage.tsx'
import ProductButtons from './ProductButtons.tsx'

export {default as ProductButtons} from './ProductButtons.tsx'

export {default as ProductImage} from '../components/ProductImage.tsx'
export {default as ProductTitle} from '../components/ProductTitle.tsx'

import type {ProductCardHOCProps} from '../interfaces/Product.ts'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
})
