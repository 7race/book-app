import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 7px;
  padding: 10px;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transition: background-color 0.4s;
  }
  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: grey;
    cursor: default;
    pointer-events: none;
  }
`;
