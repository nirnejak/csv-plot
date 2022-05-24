import * as React from "react"
import Plot from "react-plotly.js"

import {
  graphLayout,
  graphConfig,
  SupportedGraphTypes,
  GraphOptionsType,
} from "../../utils/graphConfig"

type GraphProps = {
  type: SupportedGraphTypes
  data: any[]
  options: GraphOptionsType
}

const Graph: React.FC<GraphProps> = ({ type, data, options }) => {
  const { title, titleX, titleY, orientation, showlegend, barmode, colors } =
    options

  const layout: any = { ...graphLayout }

  if (title) layout.title = title
  if (titleX) layout.xaxis = { title: titleX }
  if (titleY) layout.yaxis = { title: titleY }
  if (orientation) layout.orientation = orientation
  if (showlegend) layout.showlegend = showlegend
  if (colors) layout.colorway = colors

  if (type === "bar") {
    layout.barmode = barmode
  }

  return <Plot data={data} layout={layout} config={graphConfig} />
}

export default Graph
