import styled from "styled-components"

export const LeadMovie = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`
export const LeadText = styled.div`
  width: 50%;
  padding: 0 2rem;
  position: absolute;
  bottom: 10rem;
  right: 0;
  color: var(--color-white);
  overflow: hidden;
  @media (max-width: 520px) {
    width: 100%;
    right: unset;
  }
  h1 {
    font-size: 12rem;
    line-height: 0.9;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    @media (max-width: 1024px) {
      font-size: 8rem;
    }
    @media (max-width: 520px) {
      font-size: 5rem;
    }
  }
  a {
    display: block;
    width: 15rem;
    padding: 1rem 2rem;
    border: 2px solid #70ff5f;
    font-size: 2rem;
    color: #70ff5f;
    text-decoration: none;
    text-align: center;
    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  }
`
