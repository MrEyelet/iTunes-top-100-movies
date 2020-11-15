import React from "react"
import styled from "styled-components"

import logoImg from "./assets/logo.svg"

export const Logo = () => (
  <div className="logo">
    <img src={logoImg} alt="logo" />
  </div>
)

export const Root = styled.header`
  height: 5rem;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--over-all);
  color: var(--color-white);
`

export const Wrapper = styled.div`
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
