import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
   </React.StrictMode>
)
