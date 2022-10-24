import styled from 'styled-components';
import bgImg from '@atoms/static/auth-bg.webp';

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: url(${bgImg});
    background-position: 50% 0;
    z-index: -1;
  }
`;
