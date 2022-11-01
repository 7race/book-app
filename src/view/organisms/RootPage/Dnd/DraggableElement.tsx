import { BookCard } from '@molecules/BookCard';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './Dnd.styled';

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
      <S.DragItem
        ref={provided.innerRef}
        snapshot={snapshot}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <BookCard imgUrl={book.imageLinks.thumbnail} title={book.title} />
      </S.DragItem>
    )}
  </Draggable>
);
