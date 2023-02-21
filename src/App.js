import React from 'react'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'

import Order from './component/Order'
import Login from './component/Login'
import Accommodation from './component/Accommodation'
import ItemOne from './component/ItemOne'
import ItemTwo from './component/ItemTwo'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/orders' element={<Order />} />
        <Route exact path='/orders/:id' element={<ItemOne />} />
        <Route exact path='/order/:id' element={<ItemTwo />} />

        <Route exact path='/accommodation/:id' element={<Accommodation />} />

        <Route exact path='/sign-in' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
