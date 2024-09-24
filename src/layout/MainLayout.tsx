import logo from './../assets/react.svg'
import {NavLink, Outlet} from 'react-router-dom'

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
          <li>
            <NavLink to="/about" className={isActiveHandler}>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={isActiveHandler}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}
