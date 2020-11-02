import React from "react"
import styled from "styled-components"

const Root = styled.p`
  font-family: TTCommons-bold, sans-serif;
  font-size: 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  padding: 2rem;
  text-align: center;
`

export const Footer = () => <Root>Footer</Root>
