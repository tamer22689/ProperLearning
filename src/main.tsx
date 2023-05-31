import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.tsx";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register.tsx";
import Courses from "./pages/Courses.tsx";
import Lecturers from "./pages/Lecturers";
import Exams from "./pages/Exams";
import ContactUs from "./pages/ContactUs";
import MainPage from "./pages/MainPage.tsx";

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
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
