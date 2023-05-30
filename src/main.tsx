import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import Login from './pages/Login.tsx';
import HomePage from './pages/HomePage';
import Register from './pages/Register.tsx';
import Courses from './pages/Courses.tsx';
import Lecturers from './pages/Lecturers';
import Exams from './pages/Exams';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Courses",
    element: <Courses/>,
},
{
    path: "/Lecturers",
    element: <Lecturers/>,
},
{
    path: "/Exams",
    element: <Exams/>,
},
{
    path: "/ContactUs",
    element: <ContactUs/>,
},

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
