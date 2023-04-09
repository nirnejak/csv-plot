export const arrayToKeyValuePairs = (
  array: any[][]
): Array<Record<string, any>> => {
  const headers = array[0]

  const result: Array<Record<string, any>> = []
  array.forEach((row, i) => {
    if (i !== 0) {
      const rowObject: Record<string, string> = {}
      headers.forEach((field, index) => {
        rowObject[field] = row[index]
      })
      result.push(rowObject)
    }
  })
  return result
}
