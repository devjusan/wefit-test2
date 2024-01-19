import styled from 'styled-components';

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
