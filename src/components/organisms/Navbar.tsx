import * as React from "react"

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import styled from "../../utils/stitches.config"
import Link from "../atoms/Link"

const StyledNavbar = styled("nav", {
  height: "50px",

  paddingLeft: 15,
  paddingRight: 15,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  borderBottom: "0.5px solid $slate5",
  backgroundColor: "$slate12",
  color: "white",
})

const NavbarBrand = styled("h1", {
  backgroundColor: "$slate12",

  fontSize: "1rem",
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
        <Link href="https://github.com/nirnejak/csv-plot" target="_blank">
          <GitHubLogoIcon />
        </Link>
      </NavbarLinks>
    </StyledNavbar>
  )
}

export default Navbar
