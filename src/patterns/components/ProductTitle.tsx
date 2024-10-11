import {useContext} from 'react'
import {ProductContext} from './ProductCard.tsx'
import styles from '../styles/styles.module.css'

export default function ProductTitle({title = ''}) {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>{title || product.title}</span>
  )
}
