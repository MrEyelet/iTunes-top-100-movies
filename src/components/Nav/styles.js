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
      margin-left: 2rem;
      @media (max-width: 520px) {
        margin-left: 1rem;
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.white};
        font-size: 1.6rem;
        transition: opacity 0.35s ease-in-out;
        :hover {
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          font-size: 1.4rem;
        }
        @media (max-width: 520px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`
