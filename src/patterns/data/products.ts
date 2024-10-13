import type {Product} from '../types/Product.ts'
import coffeeMug from '../../assets/coffee-mug.png'
import coffeeMug2 from '../../assets/coffee-mug2.png'

export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    title: 'Coffee Mug',
    img: coffeeMug
  },
  {
    id: crypto.randomUUID(),
    title: 'Coffee Mug 2',
    img: coffeeMug2
  },
  {
    id: crypto.randomUUID(),
    title: 'Test'
  }
]
