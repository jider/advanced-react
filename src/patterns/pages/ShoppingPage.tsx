import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'

import coffeeMug from '../../assets/coffee-mug.png'
import '../styles/custom.css'

import type {Product} from '../types/Product.ts'

const products: Product[] = [
  {
    id: crypto.randomUUID(),
    title: 'Coffee Mug',
    img: coffeeMug
  },
  {
    id: crypto.randomUUID(),
    title: 'Test'
  }
]

export default function ShoppingPage() {
  return (
    <>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
          >
            <ProductImage className='img-bordered' />
            <ProductTitle />
            <ProductButtons className='action-buttons' />
          </ProductCard>

          // Alternative
          // <ProductCard
          //   key={product.id}
          //   product={product}
          //   className='bg-dark text-white'
          // >
          //   <ProductCard.Image className='img-bordered' />
          //   <ProductCard.Title />
          //   <ProductCard.Buttons className='action-buttons' />
          // </ProductCard>
        ))}
      </div>
    </>
  )
}
