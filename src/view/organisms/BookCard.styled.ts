import styled from 'styled-components';

export const BookCard = styled.div`
  width: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #b37700;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.9);
  }

  & > img,
  title {
    display: block;
  }
`;
