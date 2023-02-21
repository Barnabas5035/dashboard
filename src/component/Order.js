import React from 'react'
import { Outlet } from 'react-router-dom'
const Order = () => {
  return (
    <div className='home'>
      <h2>Order </h2>
      <Outlet />
    </div>
  )
}

export default Order
