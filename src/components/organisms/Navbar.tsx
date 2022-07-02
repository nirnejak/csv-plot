import * as React from "react"

import styled from "../../utils/stitches.config"

const StyledNavbar = styled("nav", {
  backgroundColor: "$slate12",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderBottom: "0.5px solid $slate5",
})

const NavbarBrand = styled("h1", {
  backgroundColor: "$slate12",

  fontSize: "1.4rem",
  color: "white",
})

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <NavbarBrand>CSV Plot</NavbarBrand>
    </StyledNavbar>
  )
}

export default Navbar
