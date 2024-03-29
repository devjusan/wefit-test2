import styled from 'styled-components';

export const SContainer = styled.button`
  font-family: var(--font-openSans);

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;

  padding: 11px 20px;
  width: 100%;
  max-width: 350px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.primary.main};
  cursor: pointer;

  border: none;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.color.background.secondaryHover};
  }
`;
