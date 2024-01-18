import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  -webkit-animation: spin 1.5 infinite;
  animation: spin 1.5 infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
