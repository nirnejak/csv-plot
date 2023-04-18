import * as React from "react"

import Papa from "papaparse"
import { SettingsHorizontal } from "akar-icons"

import BarChart from "../components/BarChart"
import DragInput from "../components/DragInput"
import { arrayToKeyValuePairs } from "../utils/arrayToKeyValuePairs"
import ToggleGroup from "src/components/atoms/ToggleGroup"
import Select from "src/components/atoms/Select"
import Popover from "src/components/atoms/Popover"

const HomePage: React.FC = () => {
  const [fields, setFields] = React.useState<string[]>([])
  const [fileData, setFileData] = React.useState<Array<Record<string, any>>>([])

  const [xAxis, setXAxis] = React.useState("")
  const [yAxis, setYAxis] = React.useState("")

  const [size, setSize] = React.useState(10)

  const [groupMode, setGroupMode] = React.useState<"grouped" | "stacked">(
    "stacked"
  )
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  )

  const handleFileDrop = (files: File[]): void => {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const parsedCsv = Papa.parse(e?.target?.result as string)
      if (parsedCsv.errors.length) {
        console.log(parsedCsv.errors[0].message)
      } else {
        setFields(parsedCsv.data[0] as string[])
        const processedData = arrayToKeyValuePairs(
          parsedCsv.data as any[][]
        ).slice(0, size)
        setFileData(processedData)
      }
    }
    reader.readAsText(files[0])
  }

  return (
    <>
      <div className="fixed right-0 top-0 flex w-full justify-center gap-5 p-5">
        <div className="w-64">
          <Select
            value={xAxis}
            onValueChange={(value) => {
              setXAxis(value)
            }}
            options={fields.map((field) => ({ label: field, value: field }))}
            label="X Axis"
            placeholder="Please select a x-axis..."
          />
        </div>
        <div className="w-64">
          <Select
            value={yAxis}
            onValueChange={(value) => {
              setYAxis(value)
            }}
            options={fields.map((field) => ({ label: field, value: field }))}
            label="Y Axis"
            placeholder="Please select a x-axis..."
          />
        </div>
        <div className="w-10 pt-6">
          <Popover icon={<SettingsHorizontal size={14} />}>
            <div className="flex flex-col gap-2.5">
              <p className="mb-2.5 text-sm font-medium leading-[19px] text-neutral-300">
                Margin
              </p>
              <fieldset className="flex items-center gap-5">
                <label
                  className="w-[55px] text-xs text-neutral-300"
                  htmlFor="top"
                >
                  Top
                </label>
                <input
                  type="number"
                  step={1}
                  id="top"
                  defaultValue="100%"
                  className="rounded bg-neutral-900 px-1.5 py-1 text-xs leading-none text-neutral-300 outline-none"
                />
              </fieldset>
              <fieldset className="flex items-center gap-5">
                <label
                  className="w-[55px] text-xs text-neutral-300"
                  htmlFor="bottom"
                >
                  Bottom
                </label>
                <input
                  type="number"
                  step={1}
                  id="bottom"
                  defaultValue="100%"
                  className="rounded bg-neutral-900 px-1.5 py-1 text-xs leading-none text-neutral-300 outline-none"
                />
              </fieldset>
              <fieldset className="flex items-center gap-5">
                <label
                  className="w-[55px] text-xs text-neutral-300"
                  htmlFor="left"
                >
                  Left
                </label>
                <input
                  type="number"
                  step={1}
                  id="left"
                  defaultValue="100%"
                  className="rounded bg-neutral-900 px-1.5 py-1 text-xs leading-none text-neutral-300 outline-none"
                />
              </fieldset>
              <fieldset className="flex items-center gap-5">
                <label
                  className="w-[55px] text-xs text-neutral-300"
                  htmlFor="right"
                >
                  Right
                </label>
                <input
                  type="number"
                  step={1}
                  id="right"
                  defaultValue="100%"
                  className="rounded bg-neutral-900 px-1.5 py-1 text-xs leading-none text-neutral-300 outline-none"
                />
              </fieldset>
            </div>
          </Popover>
        </div>
      </div>
      <div className="grid h-screen place-content-center">
        <div className="h-[600px] w-[800px]">
          <BarChart
            data={fileData}
            keys={[yAxis]}
            indexBy={xAxis}
            groupMode={groupMode}
            layout={layout}
          />
        </div>
        <div className="flex w-full justify-center gap-5 p-5 text-sm">
          <div>
            <p className="mb-2">Layout</p>
            <ToggleGroup
              value={layout}
              onValueChange={(value: string) => {
                if (value) setLayout(value as "horizontal" | "vertical")
              }}
              items={[
                {
                  label: "Horizontal",
                  value: "horizontal",
                },
                {
                  label: "Vertical",
                  value: "vertical",
                },
              ]}
            />
          </div>
          <div>
            <p className="mb-2">Group Mode</p>
            <ToggleGroup
              value={groupMode}
              onValueChange={(value: string) => {
                if (value) setGroupMode(value as "grouped" | "stacked")
              }}
              items={[
                {
                  label: "Grouped",
                  value: "grouped",
                },
                {
                  label: "Stacked",
                  value: "stacked",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
    </>
  )
}

export default HomePage
