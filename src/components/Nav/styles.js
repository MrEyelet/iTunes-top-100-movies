import styled from "styled-components"

export const Menu = styled.nav`
  min-width: 10rem;
  margin-left: auto;
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
      a {
        text-decoration: none;
        color: #000;
        transition: opacity 0.35s ease-in-out;
        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`
