import {lazy} from 'react'
import type {route} from '../types/router.ts'

export const routes: route[] = [
  {
    to: '/lazy-load',
    path: '/lazy-load/*',
    component: lazy(() => import('../lazyload/layout/LazyLoadLayout.tsx')),
    name: 'Lazy-Load Layout',
  },
]
