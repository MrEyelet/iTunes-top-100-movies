import React from "react"

import { LeadMovie } from "./styles"

export default class FetchRandomMovies extends React.Component {
  state = {
    loading: true,
    movies: []
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.feed.entry[0].link[1].attributes.href)

    this.setState({ movies: data.feed.entry, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.movies) {
      return <div>didn't get a movie</div>
    }

    return (
      <LeadMovie>
        <video autoPlay muted loop>
          <source src={this.state.movies[0].link[1].attributes.href} />
        </video>
      </LeadMovie>
    )
  }
}
