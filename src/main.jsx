import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layouts/Main'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
// import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
<RouterProvider router={router}>
      <Toaster></Toaster>
    <Main></Main>
  </RouterProvider>
  </AuthProvider>
    
  
)
