import React from "react"

import { MoviesList, MoviesListEl, Title, VideoWrap, MediaWrap, MovieDesc, MobilePreview } from "./styles"

export default class FetchRandomMovies extends React.Component {
  state = {
    loading: true,
    movies: []
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    const response = await fetch(url)
    const data = await response.json()

    this.setState({ movies: data.feed.entry, loading: false })
  }

  mouseEnter = e => {
    e.currentTarget.play()
    this.setState({ isPlaying: true })
    // console.log(e)
  }
  mouseLeave = e => {
    e.currentTarget.pause()
    e.currentTarget.load()
    this.setState({ isPlaying: true })
    // console.log(e)
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.movies.length) {
      return <div>didn't get movies</div>
    }
    return (
      <MoviesList id="top100">
        {this.state.movies.map(item => (
          <MoviesListEl key={item.title.label}>
            <Title>
              <span>{item.title.label}</span>
              <span>{item.category.attributes.term}</span>
            </Title>
            <MediaWrap>
              <img src={item["im:image"][2].label} alt={item.title.label} />
              <VideoWrap>
                <video onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} controls>
                  <source src={item.link[1].attributes.href} type="video/x-m4v" />
                </video>
              </VideoWrap>
            </MediaWrap>
            <MovieDesc>{item.summary.label}</MovieDesc>
            <MobilePreview href={item.link[1].attributes.href} />
          </MoviesListEl>
        ))}
      </MoviesList>
    )
  }
}
