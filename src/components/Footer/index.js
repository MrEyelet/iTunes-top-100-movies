import React, { useEffect } from "react"
import { Root, TV, BrokenScreen } from "./styles"
import sal from "sal.js"
import "sal.js/dist/sal.css"

export const Footer = () => {
  useEffect(sal, [])
  return (
    <Root>
      <TV>
        <BrokenScreen data-sal="fade" data-sal-delay="500"></BrokenScreen>
      </TV>
      <p>&copy; 2020 Pandemia still spreads out ;(</p>
    </Root>
  )
}
