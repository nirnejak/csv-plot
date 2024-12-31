import * as React from "react"

import Papa from "papaparse"
import { Cross, Plus, SettingsHorizontal } from "akar-icons"

import BarChart from "src/components/BarChart"
import DragInput from "src/components/DragInput"
import { arrayToKeyValuePairs } from "src/utils/arrayToKeyValuePairs"
import ToggleGroup from "src/components/atoms/ToggleGroup"
import Select from "src/components/atoms/Select"
import Popover from "src/components/atoms/Popover"
import GithubLink from "src/components/GithubLink"
import Slider from "src/components/atoms/Slider"
import { type JSX } from "react/jsx-runtime"

type DISPLAY_TYPES = "table" | "bar" | "pie" | "line" | "area" | "map"

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [size, setSize] = React.useState(10)
  const [fileData, setFileData] = React.useState<Array<Record<string, any>>>([])
  const [fields, setFields] = React.useState<string[]>([])

  const [type, setType] = React.useState<DISPLAY_TYPES>("table")
  const [xAxis, setXAxis] = React.useState("")
  const [yAxis, setYAxis] = React.useState([""])

  const [margin, setMargin] = React.useState({
    top: 50,
    right: 130,
    bottom: 50,
    left: 60,
  })
  const [padding, setPadding] = React.useState(0.1)
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

  const renderGraph = (): JSX.Element => {
    switch (type) {
      case "map":
      case "area":
      case "line":
      case "pie":
      case "table":
        return <div className="my-48 text-center">Soon ✨</div>
      case "bar":
      default:
        return (
          <BarChart
            data={fileData}
            keys={yAxis}
            indexBy={xAxis}
            groupMode={groupMode}
            layout={layout}
            margin={margin}
            padding={padding}
          />
        )
    }
  }

  return (
    <div className="flex">
      <div className="flex h-screen min-w-[300px] flex-col gap-5 bg-neutral-950 p-5 text-sm">
        <div>
          <Select
            value={xAxis}
            onValueChange={(value) => {
              setXAxis(value)
            }}
            options={fields.map((field) => ({
              label: field,
              value: field,
            }))}
            label="X Axis"
            placeholder="Please select a x-axis..."
          />
        </div>
        <div>
          <p className="mb-2">Y Axis</p>
          <div className="flex flex-col gap-2">
            {yAxis.map((field, index) => (
              <div key={index} className="flex items-end justify-between gap-2">
                <Select
                  value={field}
                  onValueChange={(value) => {
                    setYAxis((currentValue) =>
                      currentValue.map((f, i) => (i === index ? value : f))
                    )
                  }}
                  options={fields.map((field) => ({
                    label: field,
                    value: field,
                  }))}
                  placeholder="Please select a x-axis..."
                />
                {index === yAxis.length - 1 ? (
                  <button
                    className="rounded-full bg-neutral-800 p-2 text-neutral-300"
                    onClick={() => {
                      setYAxis((currentValue) => [...currentValue, ""])
                    }}
                  >
                    <Plus size={17} />
                  </button>
                ) : (
                  <button
                    className="rounded-full bg-neutral-800 p-2 text-neutral-300"
                    onClick={() => {
                      setYAxis((currentValue) =>
                        currentValue.filter((f, i) => i !== index)
                      )
                    }}
                  >
                    <Cross size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="my-1" />
        <div>
          <p className="mb-2 flex items-center justify-between">
            <span>Padding</span>
            <span>{padding}</span>
          </p>
          <Slider
            label="Padding"
            value={[padding]}
            step={0.05}
            max={0.9}
            onValueChange={(val) => {
              setPadding(val[0])
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Margin</p>
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
                  value={margin.top}
                  onChange={(e) => {
                    setMargin({ ...margin, top: parseFloat(e.target.value) })
                  }}
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
                  value={margin.bottom}
                  onChange={(e) => {
                    setMargin({
                      ...margin,
                      bottom: parseFloat(e.target.value),
                    })
                  }}
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
                  value={margin.left}
                  onChange={(e) => {
                    setMargin({ ...margin, left: parseFloat(e.target.value) })
                  }}
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
                  value={margin.right}
                  onChange={(e) => {
                    setMargin({
                      ...margin,
                      right: parseFloat(e.target.value),
                    })
                  }}
                  className="rounded bg-neutral-900 px-1.5 py-1 text-xs leading-none text-neutral-300 outline-none"
                />
              </fieldset>
            </div>
          </Popover>
        </div>
        <div className="my-1" />
        {type === "bar" && (
          <div>
            <p className="mb-2">Orientation</p>
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
        )}
        {type === "bar" && yAxis.length > 1 && (
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
        )}
      </div>
      <div className="relative grid h-screen w-full place-content-center">
        <div className="flex justify-center">
          <ToggleGroup
            value={type}
            onValueChange={(value: string) => {
              if (value) setType(value as DISPLAY_TYPES)
            }}
            items={[
              {
                label: "Table",
                value: "table",
              },
              {
                label: "Bar Chart",
                value: "bar",
              },
              {
                label: "Pie Chart",
                value: "pie",
              },
              {
                label: "Area Chart",
                value: "area",
              },
              {
                label: "Line Chart",
                value: "line",
              },
              {
                label: "Choropleth Map",
                value: "map",
              },
            ]}
          />
        </div>
        <div className="mt-6 h-[600px] w-[800px] bg-neutral-900">
          {renderGraph()}
        </div>
        <DragInput title="Drop CSV file here" onChange={handleFileDrop} />
        <div className="fixed top-0 w-full bg-purple-700 px-3 py-2.5 text-sm">
          The Product is still in development, You may face some issues, and
          some features may not work.
        </div>
      </div>
      <GithubLink />
    </div>
  )
}

export default HomePage
