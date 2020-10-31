import styled from "styled-components"

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const MoviesListEl = styled.li`
  display: flex;
  width: 33.33%;
  position: relative;
  margin-top: 2.5rem;
  list-style-type: none;
`

export const Title = styled.h2`
  position: absolute;
  z-index: var(--over-content);
  color: var(--color-white);
  font-size: 1.2rem;
`

export const VideoWrap = styled.div`
  position: relative;
  width: 30rem;
  height: 17rem;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    position: aboslute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }
`
