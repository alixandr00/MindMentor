import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { router } from './routes/AppRoutes'
import { store } from './store'
import { injectStore } from './config/axiosInstants'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
         <ToastContainer />
      </Provider>
   </React.StrictMode>
)
