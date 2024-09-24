import {createBrowserRouter, Navigate} from 'react-router-dom'
import MainLayout from './layout/MainLayout.tsx'
import ErrorPage from './layout/ErrorPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <h1>Home Page</h1>
      },
      {
        path: 'about',
        element: <h1>About Page</h1>
      },
      {
        path: 'users',
        element: <h1>Users Page</h1>
      },
    ]
  },
  {
    path: '/*',
    element: <Navigate to='/' replace/>
  }
])
