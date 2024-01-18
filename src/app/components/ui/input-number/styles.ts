import styled from 'styled-components';

export const SContainer = styled.div`
  position: relative;
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

  & input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  & input[type='number']::-webkit-inner-spin-button,
  & input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const SErrorContainer = styled.span`
  position: absolute;
  bottom: -25px;
  color: ${({ theme }) => theme.color.error.main};
  font-size: 12px;
  white-space: nowrap;
`;
