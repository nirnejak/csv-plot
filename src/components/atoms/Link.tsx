import * as React from "react"

interface Props {
  href?: string
  target?: string
  className?: string
  children?: React.ReactNode
}

const Link: React.FC<Props> = ({
  href,
  target,
  className,
  children,
  ...restProps
}) => {
  return (
    <a
      href={href}
      target={target}
      className={className}
      rel="noreferrer"
      {...restProps}
    >
      {children}
    </a>
  )
}

export default Link
