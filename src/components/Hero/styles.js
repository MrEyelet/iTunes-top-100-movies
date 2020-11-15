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
  width: 100%;
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
    position: relative;
    font-size: 10rem;
    line-height: 0.9;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-style: italic;
    animation: glitch-skew 1s infinite linear alternate-reverse;
    ::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    ::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch-anim2 1s infinite linear alternate-reverse;
    }
    @keyframes glitch-anim {
      0% {
        clip: rect(17px, 9999px, 64px, 0);
        transform: skew(0.61deg);
      }
      5% {
        clip: rect(98px, 9999px, 53px, 0);
        transform: skew(0.22deg);
      }
      10% {
        clip: rect(2px, 9999px, 100px, 0);
        transform: skew(0.91deg);
      }
      15% {
        clip: rect(45px, 9999px, 21px, 0);
        transform: skew(0.36deg);
      }
      20% {
        clip: rect(77px, 9999px, 28px, 0);
        transform: skew(0.44deg);
      }
      25% {
        clip: rect(83px, 9999px, 52px, 0);
        transform: skew(0.66deg);
      }
      30% {
        clip: rect(95px, 9999px, 57px, 0);
        transform: skew(0.86deg);
      }
      35% {
        clip: rect(90px, 9999px, 52px, 0);
        transform: skew(0.93deg);
      }
      40% {
        clip: rect(18px, 9999px, 85px, 0);
        transform: skew(0.46deg);
      }
      45% {
        clip: rect(75px, 9999px, 2px, 0);
        transform: skew(0.92deg);
      }
      50% {
        clip: rect(34px, 9999px, 88px, 0);
        transform: skew(0.84deg);
      }
      55% {
        clip: rect(99px, 9999px, 40px, 0);
        transform: skew(0.79deg);
      }
      60% {
        clip: rect(35px, 9999px, 25px, 0);
        transform: skew(0.55deg);
      }
      65% {
        clip: rect(50px, 9999px, 14px, 0);
        transform: skew(0.02deg);
      }
      70% {
        clip: rect(49px, 9999px, 4px, 0);
        transform: skew(0.74deg);
      }
      75% {
        clip: rect(71px, 9999px, 30px, 0);
        transform: skew(0.94deg);
      }
      80% {
        clip: rect(89px, 9999px, 76px, 0);
        transform: skew(0.96deg);
      }
      85% {
        clip: rect(61px, 9999px, 10px, 0);
        transform: skew(0.53deg);
      }
      90% {
        clip: rect(94px, 9999px, 69px, 0);
        transform: skew(0.22deg);
      }
      95% {
        clip: rect(50px, 9999px, 95px, 0);
        transform: skew(0.48deg);
      }
      100% {
        clip: rect(88px, 9999px, 67px, 0);
        transform: skew(0.8deg);
      }
    }
    @keyframes glitch-anim2 {
      0% {
        clip: rect(65px, 9999px, 64px, 0);
        transform: skew(0.52deg);
      }
      5% {
        clip: rect(89px, 9999px, 70px, 0);
        transform: skew(0.61deg);
      }
      10% {
        clip: rect(79px, 9999px, 58px, 0);
        transform: skew(0.38deg);
      }
      15% {
        clip: rect(35px, 9999px, 2px, 0);
        transform: skew(0.97deg);
      }
      20% {
        clip: rect(5px, 9999px, 97px, 0);
        transform: skew(0.69deg);
      }
      25% {
        clip: rect(98px, 9999px, 50px, 0);
        transform: skew(0.95deg);
      }
      30% {
        clip: rect(52px, 9999px, 94px, 0);
        transform: skew(0.39deg);
      }
      35% {
        clip: rect(78px, 9999px, 61px, 0);
        transform: skew(0.86deg);
      }
      40% {
        clip: rect(11px, 9999px, 54px, 0);
        transform: skew(0.63deg);
      }
      45% {
        clip: rect(74px, 9999px, 87px, 0);
        transform: skew(0.39deg);
      }
      50% {
        clip: rect(11px, 9999px, 28px, 0);
        transform: skew(0.7deg);
      }
      55% {
        clip: rect(68px, 9999px, 17px, 0);
        transform: skew(0.81deg);
      }
      60% {
        clip: rect(42px, 9999px, 66px, 0);
        transform: skew(0.13deg);
      }
      65% {
        clip: rect(57px, 9999px, 26px, 0);
        transform: skew(0.19deg);
      }
      70% {
        clip: rect(36px, 9999px, 86px, 0);
        transform: skew(0.14deg);
      }
      75% {
        clip: rect(69px, 9999px, 56px, 0);
        transform: skew(0.72deg);
      }
      80% {
        clip: rect(25px, 9999px, 45px, 0);
        transform: skew(0.79deg);
      }
      85% {
        clip: rect(72px, 9999px, 2px, 0);
        transform: skew(0.96deg);
      }
      90% {
        clip: rect(19px, 9999px, 11px, 0);
        transform: skew(0.58deg);
      }
      95% {
        clip: rect(26px, 9999px, 61px, 0);
        transform: skew(0.42deg);
      }
      100% {
        clip: rect(61px, 9999px, 74px, 0);
        transform: skew(0.89deg);
      }
    }
    @keyframes glitch-skew {
      0% {
        transform: skew(1deg);
      }
      10% {
        transform: skew(3deg);
      }
      20% {
        transform: skew(2deg);
      }
      30% {
        transform: skew(0deg);
      }
      40% {
        transform: skew(2deg);
      }
      50% {
        transform: skew(2deg);
      }
      60% {
        transform: skew(-1deg);
      }
      70% {
        transform: skew(0deg);
      }
      80% {
        transform: skew(0deg);
      }
      90% {
        transform: skew(-3deg);
      }
      100% {
        transform: skew(-1deg);
      }
    }
    @media (max-width: 1024px) {
      font-size: 5rem;
    }
    @media (max-width: 520px) {
      font-size: 4rem;
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
