import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)
  const showDropdown = () => setSubnav(!subnav)
  return (
    <div className='navbar-nav '>
      <Link
        to={item.path}
        onClick={item.SubNav && showDropdown}
        className='nav-link'
      >
        <div className='button ms-2  text-dark'>
          {item.icon}
          <span className='nav-items ms-2 text-dark'>{item.title}</span>
          {item.SubNav && subnav
            ? item.iconOpened
            : item.SubNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      <div>
        {subnav &&
          item.SubNav.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className='nav-link text-dark ms-2'
              >
                {item.icon}
                <span className='nav-items ms-2'>{item.title}</span>
              </Link>
            )
          })}
      </div>
      <Outlet />
    </div>
  )
}

export default SubMenu
