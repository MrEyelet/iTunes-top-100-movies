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

  getInitialState(e) {
    return {
      isPlaying: false
    }
  }
  mouseEnter = e => {
    this.setState({ isPlaying: true })
    console.log(e)
    // console.log(e.currentTarget)
  }
  mouseLeave = e => {
    this.setState({ isPaused: false })
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
              <img src={item["im:image"][2].label} alt="" />
              <VideoWrap>
                <video onMouseEnter={e => this.mouseEnter(e.currentTarget)} controls>
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
