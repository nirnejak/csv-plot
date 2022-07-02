import * as React from "react"

import styled from "../../utils/stitches.config"
import DragInput from "../atoms/DragInput"

const StyledSidebar = styled("aside", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: 20,
  borderRight: "0.5px solid $slate5",
})

const Sidebar: React.FC = () => {
  const handleFileDrop = (files: File[]) => {
    console.log(files)
  }

  return (
    <StyledSidebar>
      <div style={{ marginTop: "auto" }}>
        <DragInput title="Drop CSV files here" onChange={handleFileDrop} />
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
