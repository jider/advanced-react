import {createBrowserRouter, Navigate} from 'react-router-dom'

import MainLayout from '../layout/MainLayout.tsx'
import ErrorPage from '../layout/ErrorPage.tsx'
import {routes} from './routes.ts'

const lazyPagesRoutes = () => routes.map(route => ({
  path: route.path,
  errorElement: <ErrorPage />,
  element: <route.component />,
}))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h1>Home Page</h1>},
      ...lazyPagesRoutes()
    ]
  },
  {
    path: '/*',
    element: <Navigate to='/' replace/>
  }
])
