import styled from 'styled-components';

export const BookCardInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const Author = styled.div`
  color: green;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Link = styled.a`
  background-color: blue;
  color: white;
  border-radius: 8px;
  align-self: flex-start;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Star = {
  color: 'gold',
  width: '50px',
  height: '50px',
  position: 'relative',
  top: '-12px',
  cursor: 'pointer',
};
