import * as React from "react"

import Graph from "./components/atoms/Graph"
import DragInput from "./components/atoms/DragInput"
import { defaultColors } from "./utils/graphConfig"

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

  const handleFileDrop = (files: File[]): void => {
    console.log(files)
  }

  return (
    <section className="flex h-full w-full items-stretch justify-center bg-neutral-900">
      <div className="grid h-screen flex-[2] place-content-center">
        <Graph type="bar" data={data} options={options} />
        <div className="flex justify-center py-2">
          <DragInput title="Drop CSV files here" onChange={handleFileDrop} />
        </div>
      </div>
    </section>
  )
}

export default App
