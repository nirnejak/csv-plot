import * as React from "react"

import Papa from "papaparse"

interface HookReturn {
  csvData: Array<Record<string, string>>
  error: any
}

const useCSV = (csv: string): HookReturn => {
  const [csvData, setCsvData] = React.useState<Array<Record<string, string>>>(
    []
  )
  const [error, setError] = React.useState<string>("")

  React.useEffect(() => {
    if (csv) {
      const parsedCsv = Papa.parse(csv)
      if (parsedCsv.errors.length) {
        setError(parsedCsv.errors[0].message)
      } else {
        setCsvData(parsedCsv.data as Array<Record<string, string>>)
      }
    }
  }, [csv])

  return { csvData, error }
}

export default useCSV
