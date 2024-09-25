import {Link, Navigate, Route, Routes} from 'react-router-dom'
import {lazyLoadRoutes} from '../routes'
import classes from '../index.module.css'

export default function LazyLoadLayout() {
  return (
    <div className={classes.lazyLoadLayout}>
      <h1>Lazy Load Layout</h1>
      <ul>
        {lazyLoadRoutes && lazyLoadRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.to}>{route.name}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        {lazyLoadRoutes && lazyLoadRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        <Route path='*' element={<Navigate replace to='' />} />
      </Routes>
    </div>
  )
}
