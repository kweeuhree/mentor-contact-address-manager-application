import React from 'react'
import Home from './Pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'  
import Register from './Pages/Register' 
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])
const App = () => {
  return (
    <>
    <ToastContainer />
   <RouterProvider router={router}/>
   </>
  )
}

export default App