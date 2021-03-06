import React from "react"
import sal from "sal.js"
import "sal.js/dist/sal.css"

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
    // console.log(data.feed.entry)
    // if (data.feed.entry) {
    //   console.log(data.feed.entry.summary.label)
    //   console.log(data.feed.entry[0].summary.label)
    // }
    sal({
      threshold: 0.1
    })
  }

  mouseEnter = e => {
    e.currentTarget.querySelector("video").currentTime = 1
    e.currentTarget.querySelector("video").play()
    this.setState({ isPlaying: true })
    // console.log(e)
  }
  mouseLeave = e => {
    e.currentTarget.querySelector("video").pause()
    this.setState({ isPlaying: false })
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
      <section>
        <MoviesList id="top100">
          {this.state.movies.map(item => (
            <MoviesListEl data-sal="fade" key={item.title.label} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <Title>
                <span>{item.title.label}</span>
                <span>{item.category.attributes.term}</span>
              </Title>
              <MediaWrap>
                <img src={item["im:image"][2].label} alt={item.title.label} />
                <VideoWrap>
                  <video controls>
                    <source src={item.link[1].attributes.href} type="video/x-m4v" />
                  </video>
                </VideoWrap>
              </MediaWrap>
              {item.summary ? <MovieDesc>{item.summary.label}</MovieDesc> : null}
              <MobilePreview href={item.link[1].attributes.href} />
            </MoviesListEl>
          ))}
        </MoviesList>
      </section>
    )
  }
}
