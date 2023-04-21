import React from "react"

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
  return (
    <div className="grid h-screen place-content-center">
      <div className="h-[600px] w-[800px]">
        <PieChart data={nivoData} fill={fill} defs={defs} />
      </div>
    </div>
  )
}

export default PieChartPage
