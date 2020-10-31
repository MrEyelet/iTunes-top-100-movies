import React from "react"
import styled from "styled-components"

const Root = styled.p`
  font-family: TTCommons-bold, sans-serif;
  font-size: 7rem;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  padding: 12rem 0 10rem;
  text-align: center;
`

export const Footer = () => <Root>Footer</Root>
