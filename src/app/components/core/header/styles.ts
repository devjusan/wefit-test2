import styled from 'styled-components';

export const SContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  padding: 0.4rem 1rem;
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.primary.main};

  @media (max-width: 868px) {
    justify-content: space-between;
  }
`;

export const SLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & div {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
  }
`;

export const SItensContainer = styled.span`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 600;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.color.secondary.main};
`;
