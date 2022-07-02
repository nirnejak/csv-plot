import * as React from "react"

import styled from "../../utils/stitches.config"
import Github from "../atoms/icons/Github"

const StyledNavbar = styled("nav", {
  height: "60px",

  paddingLeft: 20,
  paddingRight: 20,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  borderBottom: "0.5px solid $slate5",
  backgroundColor: "$slate12",
  color: "white",
})

const NavbarBrand = styled("h1", {
  backgroundColor: "$slate12",

  fontSize: "1.4rem",
  color: "white",
})
const NavbarLinks = styled("div", {
  color: "white",
  width: 25,
})

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <NavbarBrand>CSV Plot</NavbarBrand>
      <NavbarLinks>
        <a
          href="https://github.com/nirnejak/csv-plot"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </NavbarLinks>
    </StyledNavbar>
  )
}

export default Navbar
