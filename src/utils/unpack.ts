export const unpack = (rows: any, key: string): string[] | number[] => {
  return rows.map((row: any) => row[key])
}
