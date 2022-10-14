import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: violet;
  color: ${({ theme }) => theme.colors.white};
  border: 2px;
`;
