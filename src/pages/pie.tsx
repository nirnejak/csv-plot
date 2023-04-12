import React from "react"

import BarChart from "../components/BarChart"
import classNames from "src/utils/classNames"
import PieChart from "src/components/PieChart"

const nivoData = [
  {
    id: "python",
    label: "python",
    value: 107,
    color: "hsl(44, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 224,
    color: "hsl(224, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 343,
    color: "hsl(50, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 240,
    color: "hsl(108, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 25,
    color: "hsl(140, 70%, 50%)",
  },
]

const fill = [
  {
    match: {
      id: "ruby",
    },
    id: "dots",
  },
  {
    match: {
      id: "c",
    },
    id: "dots",
  },
  {
    match: {
      id: "go",
    },
    id: "dots",
  },
  {
    match: {
      id: "python",
    },
    id: "dots",
  },
  {
    match: {
      id: "scala",
    },
    id: "lines",
  },
  {
    match: {
      id: "lisp",
    },
    id: "lines",
  },
  {
    match: {
      id: "elixir",
    },
    id: "lines",
  },
  {
    match: {
      id: "javascript",
    },
    id: "lines",
  },
]

const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.3)",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.3)",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
]

const PieChartPage: React.FC = () => {
  const [groupMode, setGroupMode] = React.useState<"grouped" | "stacked">(
    "stacked"
  )
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  )

  return (
    <div className="grid h-screen place-content-center">
      <div className="h-[600px] w-[800px]">
        <PieChart data={nivoData} fill={fill} defs={defs} />
      </div>

      <div className="flex w-full justify-center gap-5 p-5 text-sm">
        <div>
          <p className="mb-2">Layout</p>
          <button
            className={classNames(
              "rounded-l-md px-3 py-2",
              layout === "vertical" ? "bg-neutral-800" : "bg-neutral-700"
            )}
            onClick={() => {
              setLayout("vertical")
            }}
          >
            Vertical
          </button>
          <button
            className={classNames(
              "rounded-r-md px-3 py-2",
              layout === "horizontal" ? "bg-neutral-800" : "bg-neutral-700"
            )}
            onClick={() => {
              setLayout("horizontal")
            }}
          >
            Horizontal
          </button>
        </div>
        <div>
          <p className="mb-2">Group Mode</p>
          <button
            className={classNames(
              "rounded-l-md px-3 py-2",
              groupMode === "grouped" ? "bg-neutral-800" : "bg-neutral-700"
            )}
            onClick={() => {
              setGroupMode("grouped")
            }}
          >
            Grouped
          </button>
          <button
            className={classNames(
              "rounded-r-md px-3 py-2",
              groupMode === "stacked" ? "bg-neutral-800" : "bg-neutral-700"
            )}
            onClick={() => {
              setGroupMode("stacked")
            }}
          >
            Stacked
          </button>
        </div>
      </div>
    </div>
  )
}

export default PieChartPage
