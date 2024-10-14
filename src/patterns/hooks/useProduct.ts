import {useEffect, useMemo, useRef, useState} from 'react'
import {UseProductArgs} from '../types/Product.ts'


export const useProduct = ({initialValues, product, value, onChange}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value ?? 0)
  const isControlled = useRef(onChange !== undefined && value !== undefined)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange)
      return onChange({count: value, product})

    const newCounter = Math.min(
      Math.max(0, counter + value),
      initialValues?.maxCount ?? Number.MAX_SAFE_INTEGER
    )
    setCounter(newCounter);
  }

  const isMaxCountReached = useMemo<boolean | undefined>(
    () => !!initialValues?.maxCount && counter >= initialValues.maxCount,
    [counter, initialValues?.maxCount]
  )

  const reset = () => {
    setCounter(initialValues?.count ?? value ?? 0)
  }

  useEffect(() => {
    isMounted.current = true
  }, []);

  useEffect(() => {
    if (!isMounted.current || value === undefined) return

    setCounter(value ?? 0)
  }, [value])

  return {
    counter,
    isMaxCountReached,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset
  }
}
