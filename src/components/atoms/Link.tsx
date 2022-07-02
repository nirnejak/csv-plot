import * as React from "react"

import styled from "../../utils/stitches.config"

type Props = {
  href?: string
  target?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const StyledLink = styled("a", {
  color: "white",
})

const Link: React.FC<Props> = ({
  href,
  target,
  className,
  style,
  children,
}) => {
  return (
    <StyledLink
      href={href}
      target={target}
      className={className}
      style={style}
      rel="noreferrer"
    >
      {children}
    </StyledLink>
  )
}

export default Link
