import * as React from "react"

import DragInput from "../atoms/DragInput"

const Sidebar: React.FC = () => {
  const handleFileDrop = (files: File[]): void => {
    console.log(files)
  }

  return (
    <aside className="flex-1 flex flex-col p-3 border-r-spacing-1">
      <div style={{ marginTop: "auto" }}>
        <DragInput title="Drop CSV files here" onChange={handleFileDrop} />
      </div>
    </aside>
  )
}

export default Sidebar
