import * as React from "react"

import styled from "../../utils/stitches.config"

const StyledButton = styled("button", {})

const Button: React.FC = () => {
  return <StyledButton>Click Me</StyledButton>
}

export default Button
