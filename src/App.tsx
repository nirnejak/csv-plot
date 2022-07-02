import * as React from "react"

import Graph from "./components/atoms/Graph"
import Navbar from "./components/organisms/Navbar"
import Sidebar from "./components/organisms/Sidebar"
import { defaultColors, GraphOptionsType } from "./utils/graphConfig"
import styled from "./utils/stitches.config"

const AppContainer = styled("section", {
  backgroundColor: "$slate12",
  minHeight: "calc(100vh - 50px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
})

const GraphContainer = styled("section", {
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
    <>
      <Navbar />
      <AppContainer>
        <Sidebar />
        <GraphContainer>
          <Graph type="bar" data={data} options={options} />
        </GraphContainer>
      </AppContainer>
    </>
  )
}

export default App
