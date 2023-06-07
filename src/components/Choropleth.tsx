import * as React from "react"

import { ResponsiveChoropleth } from "@nivo/geo"

interface Props {
  data: any[]
  defs: any[]
  fill: any[]
}

const Choropleth: React.FC<Props> = ({ data, defs, fill }) => (
  <ResponsiveChoropleth
    data={data}
    features={
      [
        /* please have a look at the description for usage */
      ]
    }
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="blues"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    // defs={defs}
    // fill={fill}
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

export default Choropleth
