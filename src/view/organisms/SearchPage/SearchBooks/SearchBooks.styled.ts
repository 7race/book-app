import styled from 'styled-components';

export const Title = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.colors.bookPrimary};
  width: 400px;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.bookPrimary};
  font-size: 30px;
`;

export const Containter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.darkReader};
  padding: 40px;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  background-color: #736b5e;
  padding: 10px;
  outline: none;
  color: white;
  font-size: 26px;
  border-radius: 9px;
`;
