import styled from "styled-components"

// import retroTV from "./assets/old-tv.png"
// import screen from "./assets/screen.gif"

export const Root = styled.footer`
  padding: 0 2rem;
  font-size: 1.2rem;
  @media (max-width: 520px) {
    padding: 2rem;
  }
  p {
    padding: 2rem 0;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
  }
`
