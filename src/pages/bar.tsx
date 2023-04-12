import React from "react"

import BarChart from "../components/BarChart"
import classNames from "src/utils/classNames"

const nivoData = [
  {
    country: "AD",
    "hot dog": 7,
    "hot dogColor": "hsl(17, 70%, 50%)",
    burger: 95,
    burgerColor: "hsl(102, 70%, 50%)",
    sandwich: 165,
    sandwichColor: "hsl(252, 70%, 50%)",
    kebab: 38,
    kebabColor: "hsl(38, 70%, 50%)",
    fries: 26,
    friesColor: "hsl(331, 70%, 50%)",
    donut: 14,
    donutColor: "hsl(57, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 114,
    "hot dogColor": "hsl(192, 70%, 50%)",
    burger: 94,
    burgerColor: "hsl(191, 70%, 50%)",
    sandwich: 74,
    sandwichColor: "hsl(321, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(234, 70%, 50%)",
    fries: 78,
    friesColor: "hsl(197, 70%, 50%)",
    donut: 176,
    donutColor: "hsl(134, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 116,
    "hot dogColor": "hsl(341, 70%, 50%)",
    burger: 21,
    burgerColor: "hsl(356, 70%, 50%)",
    sandwich: 44,
    sandwichColor: "hsl(349, 70%, 50%)",
    kebab: 134,
    kebabColor: "hsl(230, 70%, 50%)",
    fries: 98,
    friesColor: "hsl(211, 70%, 50%)",
    donut: 185,
    donutColor: "hsl(191, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 45,
    "hot dogColor": "hsl(204, 70%, 50%)",
    burger: 20,
    burgerColor: "hsl(95, 70%, 50%)",
    sandwich: 112,
    sandwichColor: "hsl(335, 70%, 50%)",
    kebab: 60,
    kebabColor: "hsl(318, 70%, 50%)",
    fries: 101,
    friesColor: "hsl(95, 70%, 50%)",
    donut: 119,
    donutColor: "hsl(183, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 102,
    "hot dogColor": "hsl(123, 70%, 50%)",
    burger: 70,
    burgerColor: "hsl(295, 70%, 50%)",
    sandwich: 12,
    sandwichColor: "hsl(237, 70%, 50%)",
    kebab: 170,
    kebabColor: "hsl(171, 70%, 50%)",
    fries: 58,
    friesColor: "hsl(121, 70%, 50%)",
    donut: 163,
    donutColor: "hsl(254, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 79,
    "hot dogColor": "hsl(295, 70%, 50%)",
    burger: 11,
    burgerColor: "hsl(308, 70%, 50%)",
    sandwich: 117,
    sandwichColor: "hsl(138, 70%, 50%)",
    kebab: 183,
    kebabColor: "hsl(97, 70%, 50%)",
    fries: 180,
    friesColor: "hsl(28, 70%, 50%)",
    donut: 146,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 183,
    "hot dogColor": "hsl(278, 70%, 50%)",
    burger: 56,
    burgerColor: "hsl(94, 70%, 50%)",
    sandwich: 160,
    sandwichColor: "hsl(342, 70%, 50%)",
    kebab: 27,
    kebabColor: "hsl(92, 70%, 50%)",
    fries: 7,
    friesColor: "hsl(262, 70%, 50%)",
    donut: 144,
    donutColor: "hsl(255, 70%, 50%)",
  },
]

const keys = ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]

const indexBy = "country"

const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "#38bcb2",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "#eed312",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
]

const fill = [
  {
    match: {
      id: "fries",
    },
    id: "dots",
  },
  {
    match: {
      id: "sandwich",
    },
    id: "lines",
  },
]

const BarChartPage: React.FC = () => {
  const [groupMode, setGroupMode] = React.useState<"grouped" | "stacked">(
    "stacked"
  )
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  )

  return (
    <div className="grid h-screen place-content-center">
      <div className="h-[600px] w-[800px]">
        <BarChart
          data={nivoData}
          keys={keys}
          indexBy={indexBy}
          defs={defs}
          fill={fill}
          groupMode={groupMode}
          layout={layout}
        />
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

export default BarChartPage
