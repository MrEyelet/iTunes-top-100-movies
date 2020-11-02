import React from "react"
import styled from "styled-components"

const Root = styled.div`
  font-family: TTCommons-bold, sans-serif;
  font-size: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.color.white};
  margin: 0;
  padding: 2rem;
  p {
    color: ${({ theme }) => theme.color.white};
    text-align: center;
  }
`
const Lists = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const SingleList = styled.ul`
  li {
    margin-bottom: 1rem;
    font-size: 2rem;
    list-style-type: none;
    text-align: left;
  }
  a {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out
    :hover {
      opacity: 1;
    }
  }
`

export const Footer = () => (
  <Root>
    <p>&copy; 2020 Pandemia still spreads out ;(</p>
    <Lists>
      <SingleList>
        <li>
          <a href="#">Sound and subtitles</a>
        </li>
        <li>
          <a href="#">Media center</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </SingleList>
      <SingleList>
        <li>
          <a href="#">Help center</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">People</a>
        </li>
      </SingleList>
      <SingleList>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Terms of use</a>
        </li>
      </SingleList>
      <SingleList>
        <li>
          <a href="#">Cookies settings</a>
        </li>
      </SingleList>
    </Lists>
  </Root>
)
