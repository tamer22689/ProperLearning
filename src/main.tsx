import React from "react";
import ReactDOM from "react-dom/client";

import { store } from './rdx/store.ts'
import { Provider } from 'react-redux'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Register from "./pages/Register/Register.tsx";
import Courses from "./pages/Courses.tsx";
import Lecturers from "./pages/Lecturers/Lecturers.tsx";
import Exams from "./pages/Exams/Exams.tsx";
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import MainPage from "./pages/MainPage.tsx";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage.tsx";
import { Course } from "./pages/Course/Course.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "Courses", element: <Courses /> },
      
      {
        path: "/Lecturers",
        element: <Lecturers />,
      },
      {
        path: "/Exams",
        element: <Exams />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      
    ],
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  { path: "AdminHomePage", element: <AdminHomePage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
