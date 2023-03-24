import * as React from "react"

export interface TraceType {
  xAxis: number[]
  yAxis: number[]
}

export interface TraceContextType {
  traces: TraceType[]
  setValues: (values: TraceType[]) => void
}

export const TracesContext = React.createContext<TraceContextType>({
  traces: [],
  setValues: (values) => {
    console.log(values)
  },
})

const TracesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [traces, setTraces] = React.useState<TraceType[]>([])

  const setValues = (values: TraceType[]): void => {
    setTraces(values)
  }

  return (
    <TracesContext.Provider value={{ traces, setValues }}>
      {children}
    </TracesContext.Provider>
  )
}

export default TracesProvider
