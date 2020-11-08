import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { Footer } from "components/Footer"
import Hero from "components/Hero/index"

import FetchRandomMovies from "components/FetchRandomMovies/index"

import { GlobalStyle, theme } from "./styles"

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {/* <Header /> */}
    <Hero />
    <FetchRandomMovies />
    <Footer />
  </ThemeProvider>
)
