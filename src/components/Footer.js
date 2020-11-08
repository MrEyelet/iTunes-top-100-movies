import React from "react"
import styled from "styled-components"

const Root = styled.footer`
  font-family: TTCommons-bold, sans-serif;
  font-size: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 520px) {
    padding: 2rem;
  }
  p {
    padding: 2rem 0;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
  }
`
const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.size.contentWidth};
  padding: ${({ theme }) => theme.wrapper.space};

  margin: 6rem auto;
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
`
const SingleList = styled.ul`
  padding-left: 0;

  li {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    list-style-type: none;
    text-align: left;
    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }
    @media (max-width: 520px) {
      font-size: 1.2rem;
    }
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
    {/* <Lists>
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
    </Lists> */}
    <p>&copy; 2020 Pandemia still spreads out ;(</p>
  </Root>
)
