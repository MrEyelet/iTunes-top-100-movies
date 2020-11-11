import styled from "styled-components"

import retroTV from "./assets/old-tv.png"
import screen from "./assets/screen.gif"

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
export const TV = styled.div`
  max-width: 96rem;
  width: 100%;
  min-height: 60rem;
  margin: 10rem auto;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${retroTV});
  overflow: hidden;
`
export const BrokenScreen = styled.div`
  width: 81.7%;
  min-height: 60rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--under-base-level);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${screen});
`
