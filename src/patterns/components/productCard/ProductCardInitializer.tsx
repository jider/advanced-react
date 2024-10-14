import {useProduct} from '../../hooks/useProduct.ts'
import {ProductProvider} from './ProductContext.ts'
import type{ProductCardInitializerProps} from '../../types/Product.ts'
import styles from '../../styles/styles.module.css'

export default function ProductCardInitializer({children, className, initialValues, product, style}: ProductCardInitializerProps) {
  const {counter, isMaxCountReached, maxCount, increaseBy, reset} =
    useProduct({initialValues, product})

  return (
    <ProductProvider value={{ counter, isMaxCountReached, maxCount, product, increaseBy }}>
      <div
        className={`${styles.productCard} ${className || ''}`}
        style={style}
      >
        {typeof children === 'function'
          ? children({
            counter,
            isMaxCountReached: isMaxCountReached ?? false,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
          : children }
      </div>
    </ProductProvider>
  )
}
