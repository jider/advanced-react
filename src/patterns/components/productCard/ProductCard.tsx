import {useProduct} from '../../hooks/useProduct.ts'
import {ProductProvider} from './ProductContext.ts'
import type {ProductCardProps} from '../../types/Product.ts'
import styles from '../../styles/styles.module.css'


export default function ProductCard({children, className, onChange, product, style, value}: ProductCardProps) {
  const {counter, increaseBy} = useProduct({onChange, product, value})

  return (
    <ProductProvider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${className || ''}`}
        style={style}
      >
        {children}
      </div>
    </ProductProvider>
  )
}
