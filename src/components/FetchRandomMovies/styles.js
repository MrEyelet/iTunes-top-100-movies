import styled from "styled-components"

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
`

export const MoviesListEl = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 1rem);
  position: relative;
  margin-top: 1rem;
  overflow: hidden;
  list-style-type: none;
  img {
    z-index: var(--over-content);
    :hover {
      cursor: pointer;
      + div {
        transform: translateX(calc(71% + 8rem));
      }
    }
  }
`

export const Title = styled.div`
  width: 50%;
  position: absolute;
  left: 13rem;
  z-index: var(--over-content);
  color: red;
  font-size: 1.2rem;
`

export const VideoWrap = styled.div`
  width: 30rem;
  height: 17rem;
  position: relative;
  left: -71%;
  overflow: hidden;
  transition: transform 0.5s ease;
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }
`
export const MediaWrap = styled.div`
  display: flex;
`

export const MovieDesc = styled.div`
  padding: 1rem;
  color: var(--color-white);
`
