import styled from "styled-components"

// export const Preloader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: var(--color-black);
//   z-index: var(--over-all);
//   p {
//     font-size: 8rem;
//     color: var(--color-white);
//     @media (max-width: 520px) {
//       font-size: 3rem;
//     }
//   }
// `

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
  @media (max-width: 520px) {
    width: 90%;
  }
  h1 {
    margin-bottom: 0;
    font-size: 10rem;
    line-height: 0.9;
    font-weight: ${({ theme }) => theme.font.weight.bold};
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
    font-size: 2rem;
    color: #70ff5f;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  }
`
