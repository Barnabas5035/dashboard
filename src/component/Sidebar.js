import React from 'react'

import { BsFillPersonFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='space-toggle sticky-top  '>
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

          <Link to={'/login'} className='nav-link text-white '>
            <BsFillPersonFill />
            <span className='nav-items '>Login</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar

