import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"

import HomePage from "./pages"
import BarChartPage from "./pages/bar"
import PieChartPage from "./pages/pie"
import LineChartPage from "./pages/line"
import ChoroplethPage from "./pages/geo"

import "./main.css"

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
    path: "/line/",
    element: <LineChartPage />,
  },
  {
    path: "/pie/",
    element: <PieChartPage />,
  },
  {
    path: "/geo/",
    element: <ChoroplethPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
