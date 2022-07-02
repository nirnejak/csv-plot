import * as React from "react"

import { UploadIcon } from "@radix-ui/react-icons"

import styled from "../../utils/stitches.config"

const StyledFileInput = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "20px 30px",
  border: "1px dashed $slate3",

  color: "$slate3",
  lineHeight: 1,
})

type Props = {
  title: string
  onChange: (files: File[]) => void
}

const FileInput: React.FC<Props> = ({ title, onChange }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false)

  return (
    <StyledFileInput
      style={isHighlighted ? { borderColor: "#00bcd4" } : {}}
      onDragLeave={() => setIsHighlighted(false)}
      onDragOver={(e) => {
        e.preventDefault()
        setIsHighlighted(true)
      }}
      onDrop={(e) => {
        e.preventDefault()
        setIsHighlighted(false)

        const files = Array.from(e.dataTransfer.files).filter(
          (file) => file.type === "text/csv"
        )

        if (files.length > 0) {
          onChange(files)
        }
      }}
    >
      <UploadIcon style={{ marginRight: 10 }} />
      <span>{title}</span>
    </StyledFileInput>
  )
}

export default FileInput
