import * as React from "react"

interface Props {
  href?: string
  target?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Link: React.FC<Props> = ({
  href,
  target,
  className,
  style,
  children,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={className}
      style={style}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
