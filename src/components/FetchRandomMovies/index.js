import React from "react"

import { MoviesList, MoviesListEl, Title, VideoWrap, MediaWrap, MovieDesc, MobilePreview } from "./styles"

export default class FetchRandomMovies extends React.Component {
  state = {
    loading: true,
    movies: [],
    playlist: []
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.feed.entry)

    this.setState({ movies: data.feed.entry, loading: false })
  }

  playVideo() {
    this.refs.vidRef.play()
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
            <Title>
              <span>{item.title.label}</span>
              <span>{item.category.attributes.term}</span>
            </Title>
            <MediaWrap>
              <img src={item["im:image"][2].label} alt="" />
              <VideoWrap>
                <video ref="vidRef" controls>
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
