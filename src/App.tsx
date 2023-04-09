import * as React from "react"

import Papa from "papaparse"

import Graph from "./components/atoms/Graph"
import DragInput from "./components/atoms/DragInput"
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
      <div className="grid h-screen flex-[2] place-content-center">
        <Graph type="bar" data={data} options={options} />
        <div className="mt-5 flex justify-center gap-8">
          <div>
            <label
              htmlFor="xAxis"
              className="mb-1.5 block text-sm text-neutral-200"
            >
              X Axis
            </label>
            <select
              id="xAxis"
              className="rounded-md border-0 bg-neutral-800 text-sm text-neutral-100"
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
          <div>
            <label
              htmlFor="yAxis"
              className="mb-1.5 block text-sm text-neutral-200"
            >
              Y Axis
            </label>
            <select
              id="yAxis"
              className="rounded-md border-0 bg-neutral-800 text-sm text-neutral-200"
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
      </div>
      <div className="fixed right-5 top-5">
        <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
      </div>
    </>
  )
}

export default App
