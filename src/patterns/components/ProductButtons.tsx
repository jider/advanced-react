import {useContext} from 'react'
import {ProductContext} from './ProductCard.tsx'
import styles from '../styles/styles.module.css'

export default function ProductButtons() {
  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <span className={styles.countLabel}>{counter}</span>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}
