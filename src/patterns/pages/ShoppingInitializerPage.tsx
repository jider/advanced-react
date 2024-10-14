import {useRef} from 'react'
import {ProductButtons, ProductCardInitializer, ProductImage, ProductTitle} from '../components'
import {products} from '../data/products.ts'
import type {Product} from '../types/Product.ts'
import '../styles/custom.css'


export default function ShoppingInitializerPage() {
  const product = useRef<Product>(products[0])

   return (
    <>
      <h1>Shopping Store  Initializer</h1>
      <hr/>
        <ProductCardInitializer
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
          product={product.current}
        >
          {
            ({counter, isMaxCountReached, increaseBy , reset}) => (
              <>
                <ProductImage className='img-bordered'/>
                <ProductTitle/>
                <ProductButtons className='action-buttons'/>

                <button onClick={reset}>Reset</button>
                {counter > 0 &&
                  <button onClick={() => increaseBy(-2)}>-2</button>
                }
                {!isMaxCountReached &&
                  <button onClick={() => increaseBy(2)}>+2</button>
                }
                <span>{counter}</span>
              </>
            )
          }
        </ProductCardInitializer>
    </>
  )
}
