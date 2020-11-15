import React, { useEffect } from "react"
import { Root } from "./Footer"
import { TV } from "./TV"
import { BrokenScreen } from "./BrokenScreen"
import sal from "sal.js"
import "sal.js/dist/sal.css"

export const Footer = () => {
  // useEffect(sal, [])
  useEffect(() => {
    sal()
  }, [])
  return (
    <Root>
      <TV>
        <BrokenScreen data-sal="fade"></BrokenScreen>
      </TV>
      <p>&copy; 2020 Pandemia still spreads out ;(</p>
    </Root>
  )
}
