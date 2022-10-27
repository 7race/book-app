import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    100% {
        opacity: 1;
        filter: blur(0);
    }
`;

const scale = keyframes`
    100% {
        transform: scale(1);
    }
`;

export const Quote = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  font-family: 'Montserrat Medium';
  max-width: 40ch;
  text-align: center;
  color: #d4b996ff;
  line-height: 50px;
`;

export const Span = styled.span`
  display: inline-block;
`;

export const AppearAnimation = styled.div`
  & h1 {
    transform: scale(0.94);
    animation: ${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }

  & span {
    opacity: 0;
    filter: blur(4px);
  }

  & span:nth-child(1) {
    animation: ${fadeIn} 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(2) {
    animation: ${fadeIn} 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(3) {
    animation: ${fadeIn} 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(4) {
    animation: ${fadeIn} 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(5) {
    animation: ${fadeIn} 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(6) {
    animation: ${fadeIn} 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(7) {
    animation: ${fadeIn} 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(8) {
    animation: ${fadeIn} 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(9) {
    animation: ${fadeIn} 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(10) {
    animation: ${fadeIn} 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(11) {
    animation: ${fadeIn} 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(12) {
    animation: ${fadeIn} 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(13) {
    animation: ${fadeIn} 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(14) {
    animation: ${fadeIn} 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(15) {
    animation: ${fadeIn} 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(16) {
    animation: ${fadeIn} 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(17) {
    animation: ${fadeIn} 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  & span:nth-child(18) {
    animation: ${fadeIn} 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
`;
