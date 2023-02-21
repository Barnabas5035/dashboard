import React from 'react'
import { Outlet } from 'react-router-dom'

import MasterPage from './MainPage/MasterPage'
const Order = () => {
  return (
    <MasterPage>
      <h3 className='home'>this is my order</h3>
      <Outlet />
    </MasterPage>
  )
}

export default Order
