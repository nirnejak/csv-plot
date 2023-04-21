import * as React from "react"

import { ResponsiveLine } from "@nivo/line"

interface Props {
  data: any[]
  axisBottom?: any
  axisLeft?: any
  margin?: { top: number; bottom: number; left: number; right: number }
}

const LineChart: React.FC<Props> = ({
  data,
  axisBottom,
  axisLeft,
  margin = {
    top: 50,
    right: 130,
    bottom: 50,
    left: 60,
  },
}) => (
  <ResponsiveLine
    data={data}
    margin={margin}
    colors={{ scheme: "nivo" }} // Try greys, blues
    yFormat=" >-.2f"
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={axisBottom}
    axisLeft={axisLeft}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    motionConfig="default" // default, gentle, wobbly, still, slow, molasses
  />
)

export default LineChart
