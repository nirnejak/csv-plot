import * as React from "react"

import styled from "../../utils/stitches.config"

type Props = {
  children?: React.ReactNode
}

const StyledLink = styled("a", {
  color: "white",
})

const Link: React.FC<Props> = ({ children, ...restProps }) => {
  return <StyledLink {...restProps}>{children}</StyledLink>
}

export default Link
