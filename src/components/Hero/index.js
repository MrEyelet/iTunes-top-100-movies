import React from "react"

import { Banner, LeadText } from "./styles"
import banner from "./assets/movies-bg.jpg"

export default class Hero extends React.Component {
  render() {
    return (
      <Banner>
        <img src={banner} alt="banner" />
        <LeadText>
          <h1 data-text="Top 100 movies">Top 100 movies</h1>
          <p>One hundred movies fetched from iTunes API</p>
          <a href="#top100">see them all</a>
        </LeadText>
      </Banner>
    )
  }
}
