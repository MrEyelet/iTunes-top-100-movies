import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --under-base-level: -100;
    --base-level: 0;
    --over-content: 100;
    --modal: 1000;
    --over-all: 99999;

    --color-white: white;
    --color-black: black;

    --transition-fast-in-slow-out: 1.2s cubic-bezier(0.07, 0.4, 0.36, 1) 0.15s;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
  
  html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 10px;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--color-black);
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Playfair Display', serif;
  }

 
`
