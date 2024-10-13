import {ProductButtons, ProductCard, ProductImage} from '../index.ts'
import {ShoppingCartProps} from '../../types/ShoppingCart.ts'

export default function ShoppingCart({shoppingCart, onProductCountChange }: ShoppingCartProps) {
  return (
    <div className="shopping-cart">
      {shoppingCart && Object.entries(shoppingCart).map(([key, shoppingCartProduct]) => (
        <ProductCard
          key={key}
          product={shoppingCartProduct}
          className='bg-dark text-white'
          style={{width: '8rem'}}
          value={shoppingCartProduct.count}
          onChange={onProductCountChange}
        >
          <ProductImage className='img-bordered'/>
          <ProductButtons className='action-buttons'/>
        </ProductCard>
      ))}
    </div>
  )
}
