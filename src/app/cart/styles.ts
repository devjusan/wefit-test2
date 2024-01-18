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

export const SContainerContent = styled.div`
  display: grid;
  grid-template-areas: 'product product qtd total';
  grid-template-columns: 1fr 1fr 0.8fr 1.2fr;
  grid-auto-rows: auto;

  width: 100%;
  gap: 12px;
`;

export const SProductSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
export const SQtdSlot = styled.div`
  display: flex;
  align-items: center;
`;
export const STotalSlot = styled.div`
  display: flex;
  align-items: center;
`;
