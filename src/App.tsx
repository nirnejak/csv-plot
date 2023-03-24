import * as React from "react"

import Graph from "./components/atoms/Graph"
import Navbar from "./components/organisms/Navbar"
import Sidebar from "./components/organisms/Sidebar"
import { defaultColors } from "./utils/graphConfig"

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
      <section className="flex justify-center items-stretch">
        <Sidebar />
        <div className="flex-1 grid place-content-center">
          <Graph type="bar" data={data} options={options} />
        </div>
      </section>
    </>
  )
}

export default App
