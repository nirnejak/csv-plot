import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"

import HomePage from "./pages"

import "./main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
