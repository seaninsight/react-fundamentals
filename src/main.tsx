import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hello from './pages/Hello'
import LoginPage from './pages/Login'
import StructuringPage from './pages/Structure'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/hello',
      element: <Hello name="Sean McCambridge" />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/structuring-components',
      element: <StructuringPage />,
    },
  ],
  { basename: '/react-fundamentals' },
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
