import {ProductCard} from '../components'

import coffeeMug from '../../assets/coffee-mug.png'

import type {Product} from '../interfaces/Product.ts'

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
          // <ProductCard key={product.id} product={product}>
          //   <ProductImage />
          //   <ProductTitle/>
          //   <ProductButtons />
          // </ProductCard>

          // Alternative
          <ProductCard key={product.id} product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </>
  )
}
