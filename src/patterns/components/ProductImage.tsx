import {useContext} from 'react'
import {ProductContext} from './ProductCard.tsx'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export default function ProductImage({img = '', title = ''}) {
  const { product } = useContext(ProductContext)
  const imageToShow = (img || product.img) || noImage

  return (
    <img className={styles.productImg} src={imageToShow} alt={title || product.title}/>
  )
}
