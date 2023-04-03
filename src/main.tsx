import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hello from './pages/Hello'
import LoginPage from './pages/Login'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/hello',
      element: <Hello name="Sean" />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ],
  { basename: '/react-fundamentals' },
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
