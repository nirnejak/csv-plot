import { GithubFill } from "akar-icons"
import * as React from "react"

const GithubLink: React.FC = () => {
  return (
    <a
      href="https://github.com/nirnejak/csv-plot"
      target="_blank"
      className="
        fixed top-3 right-3 flex items-center justify-center gap-2 text-sm
        text-neutral-300
      "
      rel="noreferrer"
    >
      <span>View Source</span>
      <GithubFill size={17} />
    </a>
  )
}

export default GithubLink
