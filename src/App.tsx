import * as React from "react"

import Papa from "papaparse"

import Graph from "./components/Graph"
import DragInput from "./components/DragInput"
import { unpack } from "./utils/unpack"
import { defaultColors } from "./utils/graphConfig"
import { arrayToKeyValuePairs } from "./utils/arrayToKeyValuePairs"

const App: React.FC = () => {
  const [type, setType] = React.useState<"bar" | "pie" | "line">("bar")

  const [fields, setFields] = React.useState<string[]>([])
  const [fileData, setFileData] = React.useState<Array<Record<string, any>>>([])

  const [xAxis, setXAxis] = React.useState("")
  const [yAxis, setYAxis] = React.useState("")

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

  const graphData = React.useMemo(() => {
    if (fileData) {
      return [
        {
          type,
          name: "Name",
          x: unpack(fileData, xAxis),
          y: unpack(fileData, yAxis),
        },
      ]
    } else {
      return []
    }
  }, [type, fileData, xAxis, yAxis])

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
        <Graph
          type="bar"
          data={graphData}
          options={{
            xAxis: "",
            yAxis: [{ field: "" }],

            title: "",
            titleX: xAxis,
            titleY: yAxis,

            orientation: "v",
            barmode: "group",
            showlegend: true,

            colors: defaultColors,
          }}
        />
      </div>
      <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
    </>
  )
}

export default App
