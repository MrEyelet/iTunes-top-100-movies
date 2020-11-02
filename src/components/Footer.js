import React from "react"
import styled from "styled-components"

const Root = styled.div`
  font-family: TTCommons-bold, sans-serif;
  font-size: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  padding: 2rem;
  text-align: center;
`
const Lists = styled.div`
  display: flex;
  justify-content: justify-content;
`
const SingleList = styled.ul`
  li {
    margin-bottom: 1rem;
    font-size: 2rem;
    list-style-type: none;
    opacity: 0.5;
  }
`

export const Footer = () => (
  <Root>
    <p>&copy; 2020 Pandemia still spreads out ;(</p>
    <Lists>
      <SingleList>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </SingleList>
      <SingleList>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </SingleList>
      <SingleList>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </SingleList>
      <SingleList>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </SingleList>
    </Lists>
  </Root>
)
