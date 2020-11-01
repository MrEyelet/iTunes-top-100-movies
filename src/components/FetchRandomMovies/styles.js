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
  :hover {
    cursor: pointer;
    .sc-gzVnrw {
      transform: translateX(calc(71% + 8rem));
    }
    h2 {
      opacity: 0;
      transform: translateX(-2rem);
    }
  }
  img {
    z-index: var(--over-content);
  }
`

export const Title = styled.h2`
  width: 50%;
  position: absolute;
  left: 13rem;
  z-index: var(--over-content);
  color: red;
  font-size: 1.2rem;
  transition: 0.35s ease;
  transition-property: opacity, transform;
  will-change: transform;
  span {
    display: block;
    &:first-of-type {
      font-size: 2rem;
    }
  }
`

export const VideoWrap = styled.div`
  width: 30rem;
  height: 17rem;
  position: relative;
  left: -71%;
  overflow: hidden;
  transition: 0.5s ease;
  transitiom-property: transform;
  will-cahnge: transform;
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
