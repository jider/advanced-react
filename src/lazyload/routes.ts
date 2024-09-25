import type {route} from '../types/router.ts'
import {LazyPage1, LazyPage2, LazyPage3} from './pages'

export const lazyLoadRoutes: route[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    component: LazyPage1,
    name: 'Lazy Page 1'
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    component: LazyPage2,
    name: 'Lazy Page 2'
  },
  {
    to: 'lazy3',
    path: 'lazy3',
    component: LazyPage3,
    name: 'Lazy Page 3'
  }
]
