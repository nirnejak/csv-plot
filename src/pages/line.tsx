import React from "react"

import LineChart from "src/components/LineChart"

const nivoData = [
  {
    id: "japan",
    color: "hsl(120, 70%, 50%)",
    data: [
      { x: "plane", y: 171 },
      { x: "helicopter", y: 182 },
      { x: "boat", y: 166 },
      { x: "train", y: 1 },
      { x: "subway", y: 230 },
      { x: "bus", y: 272 },
      { x: "car", y: 239 },
      { x: "moto", y: 92 },
      { x: "bicycle", y: 179 },
      { x: "horse", y: 77 },
      { x: "skateboard", y: 33 },
      { x: "others", y: 241 },
    ],
  },
  {
    id: "france",
    color: "hsl(261, 70%, 50%)",
    data: [
      { x: "plane", y: 176 },
      { x: "helicopter", y: 60 },
      { x: "boat", y: 85 },
      { x: "train", y: 294 },
      { x: "subway", y: 17 },
      { x: "bus", y: 49 },
      { x: "car", y: 8 },
      { x: "moto", y: 281 },
      { x: "bicycle", y: 18 },
      { x: "horse", y: 113 },
      { x: "skateboard", y: 294 },
      { x: "others", y: 148 },
    ],
  },
  {
    id: "us",
    color: "hsl(339, 70%, 50%)",
    data: [
      { x: "plane", y: 214 },
      { x: "helicopter", y: 238 },
      { x: "boat", y: 254 },
      { x: "train", y: 280 },
      { x: "subway", y: 86 },
      { x: "bus", y: 126 },
      { x: "car", y: 249 },
      { x: "moto", y: 128 },
      { x: "bicycle", y: 45 },
      { x: "horse", y: 38 },
      { x: "skateboard", y: 31 },
      { x: "others", y: 17 },
    ],
  },
  {
    id: "germany",
    color: "hsl(189, 70%, 50%)",
    data: [
      { x: "plane", y: 267 },
      { x: "helicopter", y: 167 },
      { x: "boat", y: 253 },
      { x: "train", y: 296 },
      { x: "subway", y: 235 },
      { x: "bus", y: 77 },
      { x: "car", y: 87 },
      { x: "moto", y: 88 },
      { x: "bicycle", y: 50 },
      { x: "horse", y: 28 },
      { x: "skateboard", y: 277 },
      { x: "others", y: 84 },
    ],
  },
  {
    id: "norway",
    color: "hsl(335, 70%, 50%)",
    data: [
      { x: "plane", y: 2 },
      { x: "helicopter", y: 74 },
      { x: "boat", y: 158 },
      { x: "train", y: 36 },
      { x: "subway", y: 179 },
      { x: "bus", y: 107 },
      { x: "car", y: 64 },
      { x: "moto", y: 117 },
      { x: "bicycle", y: 8 },
      { x: "horse", y: 24 },
      { x: "skateboard", y: 275 },
      { x: "others", y: 160 },
    ],
  },
]

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "country",
  legendPosition: "middle",
  legendOffset: 32,
}

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "food",
  legendPosition: "middle",
  legendOffset: -40,
}

const LineChartPage: React.FC = () => {
  return (
    <div className="grid h-screen place-content-center">
      <div className="h-[600px] w-[800px]">
        <LineChart
          data={nivoData}
          axisBottom={axisBottom}
          axisLeft={axisLeft}
        />
      </div>
    </div>
  )
}

export default LineChartPage
