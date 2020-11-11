import styled from "styled-components"

import retroTV from "./assets/old-tv.png"

export const Root = styled.footer`
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
export const Retro = styled.div`
  min-width: 120rem;
  min-height: 60rem;
  margin: 10rem 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${retroTV});
`
