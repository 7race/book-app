import { BookCard } from '@molecules/BookCard';
import { FC } from 'react';
import { Draggable, DraggableStateSnapshot } from 'react-beautiful-dnd';
import styled from 'styled-components';

type DragItemProps = {
  snapshot?: DraggableStateSnapshot;
};

const DragItem = styled.div<DragItemProps>`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

type DraggableElementProps = {
  book: {
    id: string;
    title: string;
    imageLinks: { smallThumbnail: string; thumbnail: string };
  };
  index: number;
};
export const DraggableElement: FC<DraggableElementProps> = ({ book, index }) => (
  <Draggable draggableId={book.id} index={index}>
    {(provided, snapshot) => (
      <DragItem ref={provided.innerRef} snapshot={snapshot} {...provided.draggableProps} {...provided.dragHandleProps}>
        <BookCard imgUrl={book.imageLinks.thumbnail} title={book.title} />
      </DragItem>
    )}
  </Draggable>
);
