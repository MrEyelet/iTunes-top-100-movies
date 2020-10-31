import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { Header } from "components/Header"
import { Footer } from "components/Footer"
import FetchRandomMovies from "components/FetchRandomMovies/index"

import { GlobalStyle, theme } from "./styles"

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Header />
    <FetchRandomMovies />
    <Footer />
  </ThemeProvider>
)
