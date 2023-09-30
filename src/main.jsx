import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layouts/Main'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Main></Main>
  </RouterProvider>
)
