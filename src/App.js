import React from 'react'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'
import Analytic from './component/Analytic'
import Order from './component/Order'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route exact path='/analystics' element={<Analytic />} />
        <Route exact path='/orders' element={<Order />} />
      </Routes>
    </>
  )
}

export default App
