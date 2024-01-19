import styled from 'styled-components';

export const SContainer = styled.section`
  background: ${({ theme }) => theme.color.primary.main};
  max-width: 1200px;
  padding: 24px;
  padding-bottom: 0;
  border-radius: 4px;
  width: -webkit-fill-available;
`;

export const SContainerHeader = styled.header`
  display: grid;
  grid-template-areas: 'product product qtd total';
  grid-template-columns: 1fr 1fr 0.8fr 1.2fr;
  padding-bottom: 24px;
  width: 100%;
  gap: 12px;

  & span {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.color.secondary.main};

    text-transform: uppercase;
  }
`;

export const SContainerFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  gap: 1.6rem;

  & div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 568px) {
    width: 100%;
    flex-flow: unset;
    flex-direction: column-reverse;
    padding-left: 0;
    padding-right: 0;

    & button {
      width: 100%;
    }

    & div {
      width: 100%;
      justify-content: flex-end;
      margin-right: 2.6rem;
    }
  }
`;

export const SContainerContent = styled.div`
  display: grid;
  grid-template-areas: 'product product qtd total';
  grid-template-columns: 1fr 1fr 0.8fr 1.2fr;
  grid-auto-rows: auto;

  width: 100%;
  gap: 12px;

  &:last-child {
    padding-bottom: 2rem;
  }
`;

export const SProductSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  & div h3 {
    margin-bottom: '8px';
  }
`;

export const SQtdSlot = styled.div`
  display: flex;
  align-items: center;
`;

export const STotalSlot = styled.div`
  display: flex;
  align-items: center;
`;
