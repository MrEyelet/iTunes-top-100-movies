import React from "react"
import { MoviesList, MoviesListEl, Title, VideoWrap, MediaWrap, MovieDesc } from "./styles"

export default class FetchRandomMovies extends React.Component {
  state = {
    loading: true,
    movies: []
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.feed.entry.title.label)
    // console.log(data.feed.entry["summary"])
    // console.log(data.feed.entry[0].summary.label)
    console.log(data.feed.entry)

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
            <Title>
              <span>{item.title.label}</span>
              <span>{item.category.attributes.term}</span>
            </Title>
            <MediaWrap>
              <img src={item["im:image"][2].label} alt="" />
              <VideoWrap>
                <video controls name="media">
                  <source src={item.link[1].attributes.href} type="video/x-m4v" />
                </video>
              </VideoWrap>
            </MediaWrap>
            <MovieDesc>{item.summary.label}</MovieDesc>
          </MoviesListEl>
        ))}
      </MoviesList>
    )
  }
}
