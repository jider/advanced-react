import {createContext} from 'react'
import {useProduct} from '../../hooks/useProduct.ts'
import styles from '../../styles/styles.module.css'
import type {ProductCardProps, ProductCtx} from '../../types/Product.ts'

export const ProductContext = createContext({} as ProductCtx)
const { Provider} = ProductContext;

export default function ProductCard({children, className, onChange, product, style, value}: ProductCardProps) {
  const {counter, increaseBy} = useProduct({onChange, product, value})

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${className || ''}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}
