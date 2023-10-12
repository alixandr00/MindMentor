import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ToastContainer />

      <App />
   </React.StrictMode>
)
