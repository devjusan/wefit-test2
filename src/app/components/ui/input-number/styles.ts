import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 130px;

  & div {
    cursor: pointer;
  }

  & input {
    max-width: 62px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.secondary};
    padding: 5px 0;
    text-align: center;
    font-family: var(--font-openSans);
  }
`;
