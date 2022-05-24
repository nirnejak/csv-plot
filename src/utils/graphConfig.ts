export const defaultColors = ["#e91e63", "#673ab7"]

export type SupportedGraphTypes =
  | "bar"
  | "pie"
  | "line"
  | "area"
  | "scatter"
  | "radar"

type AxisType = { field: string }

export type GraphOptionsType = {
  xAxis?: string
  yAxis?: AxisType[]

  title?: string
  titleX?: string
  titleY?: string

  orientation?: "v" | "h"
  barmode?: "group" | "stack" | "relative"

  showlegend?: boolean

  colors: string[]
}

export const graphLayout = {
  font: { family: "Colfax", color: "white" },
  width: 700,
  height: 500,
  legend: { orientation: "h" },

  paper_bgcolor: "transparent",
  plot_bgcolor: "transparent",
  modebar: {
    bgcolor: "transparent",
  },
}

export const graphConfig = {
  displaylogo: false,
  responsive: true,
  scrollZoom: true,
}
