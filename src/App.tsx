import * as React from "react"

import Papa from "papaparse"

import Graph from "./components/Graph"
import DragInput from "./components/DragInput"
import { defaultColors } from "./utils/graphConfig"
import { arrayToKeyValuePairs } from "./utils/arrayToKeyValuePairs"

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

  const [fields, setFields] = React.useState<string[]>([])
  const [fileData, setFileData] = React.useState<Array<Record<string, any>>>([])

  const [xAxis, setXAxis] = React.useState("")
  const [yAxis, setYAxis] = React.useState("")

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
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const parsedCsv = Papa.parse(e?.target?.result as string)
      if (parsedCsv.errors.length) {
        console.log(parsedCsv.errors[0].message)
      } else {
        setFields(parsedCsv.data[0] as string[])
        setFileData(arrayToKeyValuePairs(parsedCsv.data as any[][]))
      }
    }
    reader.readAsText(files[0])
  }

  return (
    <>
      <div className="fixed right-0 top-0 flex w-full justify-center gap-5 p-5">
        <div className="w-64">
          <label
            htmlFor="xAxis"
            className="mb-1.5 block text-sm text-neutral-200"
          >
            X Axis
          </label>
          <select
            id="xAxis"
            className="w-full rounded-md border-0 bg-neutral-800 text-sm text-neutral-200"
            value={xAxis}
            onChange={(e) => {
              setXAxis(e.target.value)
            }}
            disabled={fields.length === 0}
          >
            <option value="">Select Field</option>
            {fields.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className="w-64">
          <label
            htmlFor="yAxis"
            className="mb-1.5 block text-sm text-neutral-200"
          >
            Y Axis
          </label>
          <select
            id="yAxis"
            className="w-full rounded-md border-0 bg-neutral-800 text-sm text-neutral-200"
            value={yAxis}
            onChange={(e) => {
              setYAxis(e.target.value)
            }}
            disabled={fields.length === 0}
          >
            <option value="">Select Field</option>
            {fields.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid h-screen place-content-center">
        <Graph type="bar" data={data} options={options} />
      </div>
      <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
    </>
  )
}

export default App
