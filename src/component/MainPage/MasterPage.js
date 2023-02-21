import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const MasterPage = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
        <Outlet />
      </div>
    </div>
  )
}

export default MasterPage
