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
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  & > img,
  title {
    display: block;
  }
`;

export const Star = {
  color: 'gold',
  width: '50px',
  height: '50px',
  position: 'absolute',
  right: '-20px',
  top: '-20px',
};
