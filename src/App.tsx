import * as React from "react"

import Graph from "./components/atoms/Graph"
import Sidebar from "./components/organisms/Sidebar"
import { defaultColors, GraphOptionsType } from "./utils/graphConfig"
import styled from "./utils/stitches.config"

const Container = styled("main", {
  backgroundColor: "$slate12",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
})

const StyledGraphContainer = styled("section", {
  flex: 2,
  display: "grid",
  placeContent: "center",
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

  return (
    <Container>
      <Sidebar />
      <StyledGraphContainer>
        <Graph type="bar" data={data} options={options} />
      </StyledGraphContainer>
    </Container>
  )
}

export default App
