import styled from "styled-components"

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.size.contentWidth};
  padding: ${({ theme }) => theme.wrapper.space};
  padding-top: 10rem;
  margin: 0 auto;
`

export const MoviesListEl = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(25% - 1rem);
  position: relative;
  margin-top: 1rem;
  list-style-type: none;
  background-color: var(--color-black);
  transition: 0.5s opacity ease-in-out;
  @media (max-width: 1366px) {
    width: calc(33.33% - 1rem);
  }
  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 520px) {
    width: 100%;
  }
  :hover {
    > div > div {
      transform: translateX(calc(71% + 8rem));
      transition: transform 0.8s cubic-bezier(0.07, 0.4, 0.36, 1) 0.15s, opacity 1.7s ease-in-out;
      opacity: 1;
    }
    h2 {
      opacity: 0;
      transform: translateX(-2rem);
      transition-delay: 0ms;
    }
    p {
      opacity: 1;
      pointer-events: all;
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
  color: #70ff5f;
  font-size: 1.2rem;
  transition: 0.35s ease-in-out 0.45s;
  transition-property: opacity, transform;
  will-change: transform;
  pointer-events: none;
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
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.07, 0.4, 0.36, 1), opacity 2s ease-in-out;
  will-change: transform;
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
  @media (max-width: 1024px) {
    display: none;
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
  z-index: 1000;
  font-size: 1.4rem;
  line-height: 1.5;
  border-top: 1px solid transparent;
  background-color: var(--color-black);
  color: var(--color-white);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  ::before {
    content: "";
    height: 0;
    position: absolute;
    top: -9px;
    left: 15%;
    opacity: 0;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid #70ff5f;
    transition: 0.5s opacity ease-in-out;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    min-height: 1rem;
    padding-left: 0;
    position: relative;
    top: unset;
    opacity: 1;
  }
`
export const MobilePreview = styled.a`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--over-all);
  @media (max-width: 1024px) {
    display: block;
  }
`
