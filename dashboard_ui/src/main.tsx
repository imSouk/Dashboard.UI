import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Register } from './components/register.tsx'
import { Dashboard } from './components/dashboad.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>

  },
  {
    path:"/Register",
    element:<Register></Register>
  },
  {
    path:"/Dashboard",
    element:<Dashboard></Dashboard>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
