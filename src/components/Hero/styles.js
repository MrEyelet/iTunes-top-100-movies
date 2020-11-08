import styled from "styled-components"

export const Banner = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
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
    background-color: rgba(0, 0, 0, 0.6);
  }
`
export const LeadText = styled.div`
  width: 50%;
  padding: 0 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  overflow: hidden;
  text-align: center;
  @media (max-width: 1024px) {
    width: 90%;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 10rem;
    line-height: 0.9;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-style: italic;
    @media (max-width: 1024px) {
      font-size: 8rem;
    }
    @media (max-width: 520px) {
      font-size: 5rem;
    }
  }
  p {
    font-size: 2rem;
    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  }
  a {
    display: block;
    width: 15rem;
    padding: 1rem 2rem;
    margin: 4rem auto 0;
    border: 2px solid #70ff5f;
    font-size: 1.6rem;
    color: #70ff5f;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 520px) {
      font-size: 1.3rem;
    }
  }
`
