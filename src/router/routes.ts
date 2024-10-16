import {lazy} from 'react'
import type {route} from '../types/router.ts'

export const routes: route[] = [
  {
    to: '/shopping-store',
    path: 'shopping-store',
    component: lazy(() => import('../patterns/pages/ShoppingPage.tsx')),
    name: 'Shopping Store'
  },
  {
    to: '/shopping-store-initializer',
    path: 'shopping-store-initializer',
    component: lazy(() => import('../patterns/pages/ShoppingInitializerPage.tsx')),
    name: 'Shopping Store With Initializer'
  },
  {
    to: '/lazy-load',
    path: 'lazy-load/*',
    component: lazy(() => import('../lazyload/layout/LazyLoadLayout.tsx')),
    name: 'Lazy-Load Layout',
  },
]
