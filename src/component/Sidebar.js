import React, { useState } from 'react'

import {
  FaBars,
  FaHome,
  FaHotel,
  FaImages,
  FaThLarge,
  FaWindowClose,
} from 'react-icons/fa'
import { FiSettings, FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [show, setShow] = useState(false)

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null} `}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {show ? <FaWindowClose /> : <FaBars />}
        </div>
      </header>
      <aside className={`sidebar${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/home' className='nav-link'>
              <FaHome className='nav-logo-icon' />
              <span className='nav-logo-name'>Homepage</span>
            </Link>
            <div iv className='nav-list'>
              <Link to={'/'} className='nav-link active'>
                <FaThLarge className='nav-link-icon' />
                <span className='nav-logo-name'>Dashboard</span>
              </Link>
              <Link to='/analystics' className='nav-link'>
                <FaHotel className='nav-link-icon' />
                <span className='nav-logo-name'>analystics</span>
              </Link>
              <Link to='/orders' className='nav-link'>
                <FaImages className='nav-link-icon' />
                <span className='nav-logo-name'>Orders</span>
              </Link>
            </div>
          </div>
          <Link to='/settings' className='nav-link'>
            <FiSettings className='nav-link-icon' />
            <span className='nav-logo-name'>setting</span>
          </Link>
          <Link to='/login' className='nav-link'>
            <FiLogIn className='nav-link-icon' />
            <span className='nav-logo-name'>Login</span>
          </Link>
        </nav>
      </aside>
    </main>
  )
}

export default Sidebar
