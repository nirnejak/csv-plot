import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"

import HomePage from "./pages"
import BarChartPage from "./pages/bar"
import PieChartPage from "./pages/pie"
import LineChartPage from "./pages/line"
import ChoroplethPage from "./pages/geo"

import "./main.css"
import NotFound from "./pages/404"

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
  {
    path: "*",
    element: <NotFound />,
  },
])

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
