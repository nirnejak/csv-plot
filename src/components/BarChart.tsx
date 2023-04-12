// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar"
import * as React from "react"

interface Props {
  data: any[]
  keys: string[]
  indexBy: string
  defs?: any
  fill?: any
  axisBottom?: any
  axisLeft?: any
  groupMode?: "grouped" | "stacked"
  layout?: "horizontal" | "vertical"
}

const BarChart: React.FC<Props> = ({
  data,
  keys,
  indexBy,
  defs,
  fill,
  axisBottom,
  axisLeft,
  groupMode = "stacked",
  layout = "vertical",
}) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy={indexBy}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode={groupMode}
    layout={layout}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "greys" }}
    defs={defs}
    fill={fill}
    borderColor={{
      from: "color",
      modifiers: [["brighter", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={axisBottom}
    axisLeft={axisLeft}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 3]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
    }
  />
)

export default BarChart
