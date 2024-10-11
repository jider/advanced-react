import {useState} from 'react'

export const useProduct = (defaultValue: number = 0) => {
  const [counter, setCounter] = useState(defaultValue)

  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(0, prev + value));
  }

  return {
    counter,
    increaseBy
  }
}
