import React from "react"
import { MoviesList, MoviesListEl, Title, VideoWrap } from "./styles"

export default class FetchRandomMovies extends React.Component {
  state = {
    loading: true,
    movies: []
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    console.log(data.feed.entry)
    // console.log(data.feed.entry[0])
    this.setState({ movies: data.feed.entry, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.movies.length) {
      return <div>didn't get movies</div>
    }

    return (
      <MoviesList>
        {this.state.movies.map(item => (
          <MoviesListEl key={item.title.label}>
            <Title>{item.title.label}</Title>
            <img src={item["im:image"][2].label} alt="" />
            <VideoWrap className="video-wrap">
              <video controls name="media">
                <source src={item.link[1].attributes.href} type="video/x-m4v" />
              </video>
            </VideoWrap>
          </MoviesListEl>
        ))}
      </MoviesList>
    )
  }
}
