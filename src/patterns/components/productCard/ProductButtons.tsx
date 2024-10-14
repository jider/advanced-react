import {useContext} from 'react'
import {ProductContext} from './ProductContext.ts'
import styles from '../../styles/styles.module.css'
import type {ProductButtonsProps} from '../../types/Product.ts'

export default function ProductButtons({className, style}: ProductButtonsProps) {
  const { counter, isMaxCountReached, increaseBy } = useContext(ProductContext)

  return (
    <div
      className={`${styles.buttonsContainer} ${className || ''}`}
      style={style}
    >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <span className={styles.countLabel}>{counter}</span>
      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(1)}
        disabled={isMaxCountReached}
      >
        +
      </button>
    </div>
  )
}
