import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DraggableElement } from './DraggableElement';

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
  height: calc(100vh - ${({ theme }) => theme.vars.widthAppHeader});
  overflow: scroll;
`;

type DroppableElementProps = {
  prefix: string;
  books: {
    id: string;
    title: string;
    imageLinks: { smallThumbnail: string; thumbnail: string };
  }[];
};

export const DroppableElement: FC<DroppableElementProps> = ({ prefix, books }) => (
  <Droppable droppableId={`${prefix}`}>
    {(provided) => (
      <DroppableStyles {...provided.droppableProps} ref={provided.innerRef}>
        {books.map((book, index) => (
          <DraggableElement key={book.id} book={book} index={index} />
        ))}
        {provided.placeholder}
      </DroppableStyles>
    )}
  </Droppable>
);
