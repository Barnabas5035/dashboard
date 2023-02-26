import React from 'react'
import Marquee from 'react-fast-marquee'

import MasterPage from './MainPage/MasterPage'
import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import { FiLogIn, FiSettings } from 'react-icons/fi'
import { FaThLarge } from 'react-icons/fa'
import SubMenu from './SubMenu'
import { sidebarMenu } from '../component/dropDownMenu'

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, password])
  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setUser('')
    setPassword('')
    // console.log(user, password)
  }

  return (
    <MasterPage>
      {/* sidebar navigation */}
      <div>
        {success ? (
         <></>
//           <div
//             className='offcanvas offcanvas-start sidebar-nav mt-3 bg-light'
//             tabindex='-1'
//             id='offcanvasExample'
//             aria-labelledby='offcanvasExampleLabel'
//           >
//             <div className='offcanvas-header '>
//               <div to='/' className=' nav-link text-dark '>
//                 <img
//                   src='./logo512.png'
//                   alt='pic'
//                   className='images-logo mb-2 ms-4'
//                 />
//                 <span className='nav-item  fw-bold text-uppercase'>
//                   blogwebsite
//                 </span>
//               </div>
//             </div>

//             <div className='navbar-nav mt-2'>
//               <Link to={'/dashboard'} className='nav-link  text-dark ms-2 '>
//                 <FaThLarge className='link icons' />
//                 <span className='nav-items ms-2'>Dashboard</span>
//               </Link>

//               {/* dropdowm menus bar on the Dashboard */}

//               <div>
//                 {sidebarMenu.map((item, index) => {
//                   return <SubMenu item={item} key={index} />
//                 })}
//               </div>
//               <div className='settings '>
//                 <Link to={'/setting'} className='nav-link text-dark ms-2'>
//                   <FiSettings />
//                   <span className='nav-items ms-2'>Settings</span>
//                 </Link>
//                 <Link to={'/login'} className='nav-link text-dark ms-2'>
//                   <FiLogIn />
//                   <span className='nav-items ms-2'>Login</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live='assertive'
            >
              {errMsg}
               <Marquee
                className='display-9 text-center mt-4'
                direction='alternative'
              >
                You need to sign up with your username and passWord first
              </Marquee>
              <h2>sign in</h2>
            </p>
            <form className='form' onSubmit={handleSubmit}>
              <label htmlFor='userName'>UserName:</label>
              <input
                type='text'
                id='userName'
                value={user}
                required
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                ref={userRef}
              />
              <label htmlFor='passWord'>PassWord:</label>
              <input
                type='PassWord'
                id='passWord'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className='signBtn '>sign in</button>
            </form>
          </section>
        )}
        <Marquee className='display-9 text-center mt-4' direction='alternative'>
          You need to sign up with your username and passWord first
        </Marquee>
      </div>
    </MasterPage>
  )
}

export default Login

