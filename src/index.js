import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import Dashboard from './component/Dashboard'

import Login from './component/Login'
import Setting from './component/Setting'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Compose from './component/Compose'
import ItemTwo from './component/ItemTwo'
import ItemOne from './component/ItemOne'
import ErrorPage from './component/ErrorPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
  },

  {
    path: '/orders/Items1',
    element: <ItemOne />,
  },
  {
    path: '/order/Item2',
    element: <ItemTwo />,
  },
  {
    path: '/accommodation/Compose',
    element: <Compose />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/setting',
    element: <Setting />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
