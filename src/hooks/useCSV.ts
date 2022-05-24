import * as React from "react"

import Papa from "papaparse"

const useCSV = (csv: string) => {
  const [csvData, setCsvData] = React.useState<any[]>([])
  const [error, setError] = React.useState<string>("")

  React.useEffect(() => {
    if (csv) {
      const parseCsv = async () => {
        const parsedCsv = await Papa.parse(csv)
        if (parsedCsv.errors.length) {
          setError(parsedCsv.errors[0].message)
        } else {
          setCsvData(parsedCsv.data)
        }
      }
      parseCsv()
    }
  }, [csv])

  return { csvData, error }
}

export default useCSV
