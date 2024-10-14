import {createContext} from 'react'
import type {ProductCtx} from '../../types/Product.ts'

const ProductContext = createContext({} as ProductCtx)
const {Provider} = ProductContext;

export {
  ProductContext,
  Provider as ProductProvider,
}
