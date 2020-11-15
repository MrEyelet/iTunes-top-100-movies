import styled from "styled-components"

import retroTV from "./assets/old-tv.png"
import screen from "./assets/screen.gif"

export const BrokenScreen = styled.div`
  width: 81.7%;
  min-height: 59.5rem;
  position: absolute;
  left: 49%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--under-base-level);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${screen});
  border-radius: 10rem;
  @media (max-width: 1024px) {
    min-height: 29.7rem;
  }
  @media (max-width: 520px) {
    min-height: 19.7rem;
    border-radius: 5rem;
  }
`
