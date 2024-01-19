import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const SAttributesContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  padding-left: 1.6rem;
  flex: 1;
`;

export const SAttributesInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  & div {
    color: ${({ theme }) => theme.color.tertiary.main};
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.medium};
  }

  & .price {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  & h3 {
    color: ${({ theme }) => theme.color.tertiary.main};
    font-size: ${({ theme }) => theme.font.smallMedium};
    font-weight: 700;
  }
`;

export const SAttributesAction = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  & .total {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 0;

    & .subtotal {
      color: ${({ theme }) => theme.color.secondary.main};
      font-weight: 700;
      font-size: ${({ theme }) => theme.font.small};
      text-transform: uppercase;
    }

    & .currency {
      color: ${({ theme }) => theme.color.tertiary.main};
      font-weight: 700;
      font-size: ${({ theme }) => theme.font.medium};
    }
  }
`;
