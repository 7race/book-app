import styled from 'styled-components';

export const SearchBookContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: rgb(138, 121, 32);
  background: linear-gradient(90deg, rgba(138, 121, 32, 1) 0%, rgba(245, 137, 32, 1) 42%, rgba(255, 181, 0, 1) 96%);
`;
