import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & img {
    animation-name: ${spin};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    overflow: hidden;
  }
`;
