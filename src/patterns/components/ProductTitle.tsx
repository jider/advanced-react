import {useContext} from 'react'
import {ProductContext} from './ProductCard.tsx'
import styles from '../styles/styles.module.css'
import type {ProductTitleProps} from '../types/Product.ts'


export default function ProductTitle({className, title, style}: ProductTitleProps) {
  const { product } = useContext(ProductContext)

  return (
    <span
      className={`${styles.productDescription} ${className || ''}`}
      style={style}
    >
      {title || product.title}
    </span>
  )
}
