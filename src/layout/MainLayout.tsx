import logo from './../assets/react.svg'
import {NavLink, Outlet} from 'react-router-dom'
import {routes} from '../router/routes.ts'
import {Suspense} from 'react'

export default function MainLayout() {
  const isActiveHandler =  ({isActive} : {isActive : boolean}) => isActive ? 'nav-active' : ''

  return (
    <div className="main-layout">
      <nav>
        <img className="main-logo" src={ logo } alt="React Logo"/>
        <hr/>

        <ul>
          <li>
            <NavLink to="/" className={isActiveHandler}>Home</NavLink>
          </li>

          {routes && routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.to} className={isActiveHandler}>{route.name}</NavLink>
            </li>
          ))}

        </ul>
      </nav>
      <div className="main-content">
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet/>
        </Suspense>
      </div>
    </div>
  )
}
