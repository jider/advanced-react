import {LazyExoticComponent} from 'react'

type JSXComponent = () => JSX.Element

export interface route {
  to: string
  path: string
  component: JSXComponent | LazyExoticComponent<JSXComponent>
  name: string,
  children?: route[]
}
