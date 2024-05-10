import * as React from "react"

interface Props {}

const NotFound: React.FC<Props> = () => {
  return (
    <div className="h-screen grid place-content-center text-center">
      <div className="bg-neutral-950 p-5">
        <h1 className="font-semibold text-xl mb-1">Not Found</h1>
        <p>the page you're looking for doesn't exists.</p>
      </div>
    </div>
  )
}

export default NotFound
