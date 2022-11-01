import styled from 'styled-components';
import type { DraggableStateSnapshot } from 'react-beautiful-dnd';

export const ListGrid = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

type DragItemProps = {
  snapshot?: DraggableStateSnapshot;
};

export const DragItem = styled.div<DragItemProps>`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.media.mobile} {
    box-shadow: none;
    background: none;
    border: none;
  }
`;

export const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
  width: 250px;
  height: calc(100vh - ${({ theme }) => theme.vars.widthAppHeader});
  overflow: scroll;
`;

export const P = styled.p`
  font-size: 40px;
  margin-top: 30vh;
  text-align: center;
`;
