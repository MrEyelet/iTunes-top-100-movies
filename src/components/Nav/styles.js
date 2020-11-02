import styled from "styled-components"

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    margin: 0;
    padding-left: 0;
    li {
      list-style-type: none;
      font-weight: bold;
      font-size: 1.6rem;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #000;
        font-size: 1.6rem;
        transition: opacity 0.35s ease-in-out;
        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`
