import styled from "styled-components"

import retroTV from "./assets/old-tv.png"
import screen from "./assets/screen.gif"

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
  @media (max-width: 1024px) {
    min-height: 30rem;
  }
  @media (max-width: 520px) {
    margin: 0 auto;
    min-height: 20rem;
  }
`
