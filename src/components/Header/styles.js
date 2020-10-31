import React from "react"
import styled from "styled-components"

import logoImg from "./assets/logo.png"

export const Logo = () => (
  <a to="/" className="logo">
    <img alt="Startup Development House" src={logoImg} />
  </a>
)

export const Root = styled.header`
  height: 5rem;
`

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
  }
`
