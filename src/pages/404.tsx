import * as React from "react"

const NotFound: React.FC = () => {
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="bg-neutral-950 p-5">
        <h1 className="mb-1 text-xl font-semibold">Not Found</h1>
        <p>the page you&apos;re looking for doesn&apos;t exists.</p>
      </div>
    </div>
  )
}

export default NotFound
