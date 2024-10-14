import {useContext} from 'react'
import {ProductContext} from './ProductContext.ts'
import styles from '../../styles/styles.module.css'
import noImage from '../../assets/no-image.jpg'
import type {ProductImageProps} from '../../types/Product.ts'


export default function ProductImage({className, img = '', title = '', style}: ProductImageProps) {
  const { product } = useContext(ProductContext)
  const imageToShow = (img || product.img) || noImage

  return (
    <img
      className={`${styles.productImg} ${className || ''}`}
      src={imageToShow}
      alt={title || product.title}
      style={style}
    />
  )
}
