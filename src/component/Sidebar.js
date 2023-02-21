import React from 'react'
import { sidebarMenu } from '../component/dropDownMenu'
import SubMenu from './SubMenu'

import { FaThLarge } from 'react-icons/fa'
import { FiSettings, FiLogIn } from 'react-icons/fi'

import { BsFillPersonFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='space-toggle sticky-top '>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
        <div className='container-fluid '>
          {/* my navbar toggle buttion */}
          <button
            className='navbar-toggler me-2 '
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          >
            <span className='navbar-toggler-icon ' />
          </button>
          {/* form input group */}
          <form className='d-flex ms-auto'>
            <div className='input-group my-2 my-lg-0'>
              <input
                type='text'
                className='form-control'
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby='button-addon2'
              />
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='button-addon2'
              >
                <i className='bi bi-search'></i>
              </button>
            </div>
          </form>

          <button type='button' class='btn btn-dark'>
            <BsFillPersonFill />
            <span className='nav-items ms-2'>Login</span>
          </button>
        </div>
      </nav>

      {/* sidebar navigation */}

      <div
        className='offcanvas offcanvas-start sidebar-nav mt-3 bg-light'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header '>
          <div to='/' className=' nav-link text-dark '>
            <img
              src='./photo/images (5).jpg'
              alt='pic'
              className='images-logo mb-2 ms-4'
            />
            <span className='nav-item  fw-bold text-uppercase'>
              blogwebsite
            </span>
          </div>
        </div>

        <div className='navbar-nav mt-2'>
          <Link to='/dashboard' className='nav-link  text-dark ms-2 '>
            <FaThLarge className='link icons' />
            <span className='nav-items ms-2'>Dashboard</span>
          </Link>

          {/* dropdowm menus bar on the Dashboard */}

          <div>
            {sidebarMenu.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </div>
          <div className='settings '>
            <Link to='/setting' className='nav-link text-dark ms-2'>
              <FiSettings />
              <span className='nav-items ms-2'>Settings</span>
            </Link>
            <Link to={'/login'} className='nav-link text-dark ms-2'>
              <FiLogIn />
              <span className='nav-items ms-2'>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
