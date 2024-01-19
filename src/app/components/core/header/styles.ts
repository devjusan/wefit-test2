import styled from 'styled-components';

export const SContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  padding: 1.6rem 1rem;
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.primary.main};

  @media (max-width: 868px) {
    justify-content: space-between;
  }
`;

export const SCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;

  & div {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
  }

  @media (max-width: 568px) {
    & div h5 {
      display: none;
    }
  }
`;

export const SItensContainer = styled.span`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 600;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.color.secondary.main};
`;
