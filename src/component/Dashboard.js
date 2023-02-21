import React from 'react'
import { Outlet } from 'react-router-dom'
import MasterPage from './MainPage/MasterPage'

const Dashboard = () => {
  return (
    <MasterPage>
      <h3 className='home'>hello word</h3>
      <Outlet />
    </MasterPage>
  )
}

export default Dashboard
