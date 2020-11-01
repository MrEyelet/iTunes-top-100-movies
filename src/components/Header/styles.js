import React from "react"
import styled from "styled-components"

import logoImg from "./assets/logo.png"

export const Logo = () => (
  <span className="logo">
    <img src={logoImg} />
  </span>
)

export const Root = styled.header`
  height: 5rem;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--over-all);
  color: var(--color-white);
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
