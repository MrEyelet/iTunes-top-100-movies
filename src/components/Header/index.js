import React from "react"
import { Nav } from "components/Nav"

import { Root, Wrapper, Logo } from "./styles"

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  </Root>
)
