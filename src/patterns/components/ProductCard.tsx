import {createContext} from 'react'
import {useProduct} from '../hooks/useProduct.ts'
import styles from '../styles/styles.module.css'
import type {ProductCardProps, ProductCtx} from '../interfaces/Product.ts'

export const ProductContext = createContext({} as ProductCtx)
const { Provider} = ProductContext;

export default function ProductCard({children, product}: ProductCardProps) {
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}
