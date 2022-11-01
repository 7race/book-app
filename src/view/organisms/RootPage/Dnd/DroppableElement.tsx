import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DraggableElement } from './DraggableElement';
import * as S from './Dnd.styled';

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
      <S.DroppableStyles {...provided.droppableProps} ref={provided.innerRef}>
        {books.map((book, index) => (
          <DraggableElement key={book.id} book={book} index={index} />
        ))}
        {provided.placeholder}
      </S.DroppableStyles>
    )}
  </Droppable>
);
