import { DragDropContext, Droppable, Draggable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { BookCard } from '@molecules/BookCard';
import { useState } from 'react';
import { getItemFromLocalStorage } from '../../../helpers/localStorage';
import * as S from './Root.styled';

type Book = {
  id: string;
  title: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
};

export const Root = () => {
  const getSavedBooks = () => {
    if (booksFromLS) {
      return booksFromLS;
    } else {
      return [];
    }
  };

  const booksFromLS = getItemFromLocalStorage('books');

  const [savedBooks, setSavedBooks] = useState<Book[]>(getSavedBooks);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const [reorderedItem] = savedBooks.splice(result.source.index, 1);
    savedBooks.splice(result.destination.index, 0, reorderedItem);
    setSavedBooks(savedBooks);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <Droppable droppableId='droppable1'>
        {(provided: DroppableProvided) => (
          <S.DndField {...provided.droppableProps} ref={provided.innerRef}>
            {savedBooks.map((book, index) => (
              <Draggable key={book.id} draggableId={book.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <BookCard imgUrl={book.imageLinks.thumbnail} title={book.title} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </S.DndField>
        )}
      </Droppable>
    </DragDropContext>
  );
};
