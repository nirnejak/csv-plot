import * as React from "react"

import Link from "../atoms/Link"

const Navbar: React.FC = () => {
  return (
    <nav className="px-3 flex items-center justify-center text-white">
      <div>CSV Plot</div>
      <div>
        <Link href="https://github.com/nirnejak/csv-plot" target="_blank">
          GitHubLogoIcon
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
