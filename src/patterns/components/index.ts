import ProductCardHOC from './productCard/ProductCard.tsx'
import ProductTitle from './productCard/ProductTitle.tsx'
import ProductImage from './productCard/ProductImage.tsx'
import ProductButtons from './productCard/ProductButtons.tsx'

export {default as ProductButtons} from './productCard/ProductButtons.tsx'
export {default as ProductImage} from './productCard/ProductImage.tsx'
export {default as ProductTitle} from './productCard/ProductTitle.tsx'
export {default as ShoppingCart} from './shoppingCart/ShoppingCart'

import type {ProductCardHOCProps} from '../types/Product.ts'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
})
