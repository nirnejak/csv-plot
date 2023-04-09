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
    <section className="flex h-full w-full items-stretch justify-center bg-neutral-900">
      <div className="flex flex-col justify-center gap-5 p-2">
        <div>
          <label htmlFor="xAxis" className="mb-1.5 block text-sm text-white">
            X Axis
          </label>
          <select id="xAxis" className="rounded-md border-0 text-sm">
            <option value="">Select Field</option>
            {fields.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="yAxis" className="mb-1.5 block text-sm text-white">
            Y Axis
          </label>
          <select id="yAxis" className="rounded-md border-0 text-sm">
            <option value="">Select Field</option>
            {fields.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid h-screen flex-[2] place-content-center">
        <Graph type="bar" data={data} options={options} />
        <div className="flex justify-center py-2">
          <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
        </div>
      </div>
    </section>
  )
}

export default App
