import {useEffect, useRef, useState} from 'react'
import type {OnProductChange, Product} from '../types/Product.ts'

interface UseProductArgs {
  onChange?: OnProductChange
  product: Product
  value?: number
}

export const useProduct = ({onChange, product, value}: UseProductArgs) => {
  const [counter, setCounter] = useState(value ?? 0)
  const isControlled = useRef(onChange !== undefined && value !== undefined)

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange)
      return onChange({count: value, product})

    const newCounter = Math.max(0, counter + value)
    setCounter(newCounter);
  }

  useEffect(() => {
    setCounter(value ?? 0)
  }, [value])

  return {
    counter,
    increaseBy
  }
}
