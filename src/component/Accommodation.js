import React from 'react'
import { Outlet } from 'react-router-dom'

const Accommodation = () => {
  return (
    <div className='accomodation'>
      <h2>this is my accommodation</h2>
      <Outlet />
    </div>
  )
}

export default Accommodation
