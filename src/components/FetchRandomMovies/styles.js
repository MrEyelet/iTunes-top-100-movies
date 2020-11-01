import styled from "styled-components"

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  max-width: ${({ theme }) => theme.size.contentWidth};
  padding: ${({ theme }) => theme.wrapper.space};
  margin: 0 auto;
`

export const MoviesListEl = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 1rem);
  position: relative;
  margin-top: 1rem;
  list-style-type: none;
  background-color: var(--color-black);
  transition: 0.5s opacity ease-in-out;
  :hover {
    cursor: pointer;
    .sc-gzVnrw {
      transform: translateX(calc(71% + 8rem));
    }
    h2 {
      opacity: 0;
      transform: translateX(-2rem);
    }
    p {
      color: white;
      border-color: tomato;
      z-index: 1000;
      ::before {
        opacity: 1;
      }
    }
    img {
      filter: grayscale(100%);
    }
  }
  img {
    z-index: var(--over-content);
    transition: filter 0.35s ease-in-out-in-out;
  }
`

export const Title = styled.h2`
  width: 50%;
  position: absolute;
  left: 13rem;
  z-index: var(--over-content);
  color: tomato;
  font-size: 1.2rem;
  transition: 0.35s ease-in-out;
  transition-property: opacity, transform;
  will-change: transform;
  span {
    display: block;
    &:first-of-type {
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
    }
  }
`

export const VideoWrap = styled.div`
  width: 30rem;
  height: 17rem;
  position: relative;
  left: -71%;
  transition: 0.5s ease-in-out;
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
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const MovieDesc = styled.p`
  min-height: 17rem;
  position: absolute;
  top: 100%;
  padding: 2rem;
  margin-top: 0;
  z-index: -1;
  font-size: 1.6rem;
  border-top: 1px solid transparent;
  background-color: var(--color-black);
  color: var(--color-white);
  color: black;
  transition: 0.5s ease-in-out;
  transition-property: transform, color, background-color, border-color;
  ::before {
    content: "";
    height: 0;
    position: absolute;
    top: -15px;
    left: 13%;
    opacity: 0;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 15px solid tomato;
    transition: 0.5s opacity ease-in-out;
  }
`