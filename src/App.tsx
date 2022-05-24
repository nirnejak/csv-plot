import * as React from "react"

import DragInput from "./components/atoms/DragInput"
import Graph from "./components/atoms/Graph"
import { defaultColors, GraphOptionsType } from "./utils/graphConfig"
import styled from "./utils/stitches.config"

const Container = styled("div", {
  backgroundColor: "$slate12",
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
})

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>([])

  React.useEffect(() => {
    setData([
      {
        type: "bar",
        name: "Squares",
        x: [1, 2, 3, 4, 5, 6, 7],
        y: [1, 4, 9, 16, 25, 36, 49],
      },
      {
        type: "bar",
        name: "Cubes",
        x: [1, 2, 3, 4, 5, 6, 7],
        y: [1, 8, 27, 64, 125, 216, 343],
      },
    ])
  }, [])

  const options: GraphOptionsType = {
    xAxis: "",
    yAxis: [{ field: "" }],

    title: "Squares and Cubes",
    titleX: "Numbers",
    titleY: "Functions",

    orientation: "v",
    barmode: "group",
    showlegend: true,

    colors: defaultColors,
  }

  const handleFileDrop = (files: File[]) => {
    console.log(files)
  }

  return (
    <Container>
      <DragInput title="Drop CSV files here" onChange={handleFileDrop} />
      <Graph type="bar" data={data} options={options} />
    </Container>
  )
}

export default App
