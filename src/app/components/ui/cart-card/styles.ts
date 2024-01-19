import styled from 'styled-components';

export const SContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 10px 11px;
  background: ${({ theme }) => theme.color.primary.main};
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  & h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.font.small};
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.color.tertiary.main};
  }

  & span {
    font-size: ${({ theme }) => theme.font.medium};
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.color.tertiary.main};
  }
`;
