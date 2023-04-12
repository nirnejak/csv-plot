import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"

import HomePage from "./pages"
import BarChartPage from "./pages/bar"

import "./main.css"
import PieChartPage from "./pages/pie"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/bar/",
    element: <BarChartPage />,
  },
  {
    path: "/pie/",
    element: <PieChartPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
