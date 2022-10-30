import styled from 'styled-components';

export const DndField = styled.div`
  background-color: #c8d7de;
  padding: 40px;
  border: 2px solid;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  gap: 30px;

  height: 90vh;
  overflow: scroll;

  & > div {
    cursor: grab;
  }
`;
