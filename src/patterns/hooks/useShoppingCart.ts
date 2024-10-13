import {useState} from 'react'
import type {ShoppingCart} from '../types/ShoppingCart.ts'
import type {OnProductChangeArgs} from '../types/Product.ts'

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

  const onProductCountChange = ({count, product}: OnProductChangeArgs) => {
    setShoppingCart(prevState => {
      const productInCart = prevState[product.id] ?? {...product, count: 0}

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...prevState,
          [productInCart.id]: productInCart
        }
      }

      // Delete the product
      delete prevState[product.id]
      return {...prevState}
    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  }
}
