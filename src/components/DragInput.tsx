import * as React from "react"

import { CloudUpload } from "akar-icons"

interface Props {
  title: string
  onChange: (files: File[]) => void
}

const FileInput: React.FC<Props> = ({ title, onChange }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false)

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target

    if (files) {
      onChange([...files])
    }
  }

  return (
    <>
      <div
        style={isHighlighted ? { borderColor: "#00bcd4" } : {}}
        onDragLeave={() => {
          setIsHighlighted(false)
        }}
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
        <label
          htmlFor="file-input"
          className="
            absolute right-0 bottom-0 flex w-full cursor-pointer items-center
            justify-center gap-2 bg-neutral-800 p-4 text-center text-neutral-400
            hover:bg-neutral-900
          "
        >
          <CloudUpload />
          <span>{title}</span>
        </label>
      </div>
      <input
        type="file"
        id="file-input"
        className="hidden"
        onChange={handleFileInput}
      />
    </>
  )
}

export default FileInput
