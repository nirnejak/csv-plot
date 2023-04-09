export {}

declare global {
  type SupportedGraphTypes =
    | "bar"
    | "pie"
    | "line"
    | "area"
    | "scatter"
    | "radar"

  interface AxisType {
    field: string
  }

  interface GraphOptionsType {
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
}
