import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { getItemFromLocalStorage } from '../../../../helpers/localStorage';
import { DroppableElement } from './DroppableElement';
import * as S from './Dnd.styled';

type Book = {
  id: string;
  title: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
};

export const Dnd = () => {
  const lists = ['reading', 'finished'];
  const readingBooksFromLS = getItemFromLocalStorage('readingBooks');
  const finishedBooksFromLS = getItemFromLocalStorage('finishedBooks');

  const getReadingBooks = () => {
    if (readingBooksFromLS) {
      return readingBooksFromLS;
    } else {
      return [];
    }
  };

  const getFinishedBooks = () => {
    if (finishedBooksFromLS) {
      return finishedBooksFromLS;
    } else {
      return [];
    }
  };

  const [readingBooks, setReadingBooks] = useState<Book[]>(getReadingBooks);

  const [finishedBooks, setFinishedBooks] = useState<Book[]>(getFinishedBooks);

  const onDrag = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const listCopy = {
      reading: [...readingBooks],
      finished: [...finishedBooks]
    };

    type ListCopy = keyof typeof listCopy;

    const sourceList = listCopy[result.source.droppableId as ListCopy];

    const destinationList = listCopy[result.destination.droppableId as ListCopy];

    const removedElement = sourceList.splice(result.source.index, 1)[0];
    destinationList.splice(result.destination.index, 0, removedElement);

    if (result.source.droppableId === 'reading' && result.destination.droppableId === 'finished') {
      setReadingBooks(sourceList);
      setFinishedBooks(destinationList);

      localStorage.setItem('readingBooks', JSON.stringify(sourceList));
      localStorage.setItem('finishedBooks', JSON.stringify(destinationList));
    } else if (result.source.droppableId === 'finished' && result.destination.droppableId === 'reading') {
      setReadingBooks(destinationList);
      setFinishedBooks(sourceList);

      localStorage.setItem('readingBooks', JSON.stringify(destinationList));
      localStorage.setItem('finishedBooks', JSON.stringify(sourceList));
    } else {
      switch (result.source.droppableId) {
        case 'reading':
          const newReadingItems = [...readingBooks];
          const [removedReading] = newReadingItems.splice(result.source.index, 1);
          newReadingItems.splice(result.destination.index, 0, removedReading);
          setReadingBooks(newReadingItems);

          localStorage.setItem('readingBooks', JSON.stringify(newReadingItems));

          break;
        case 'finished':
          const newFinishedItems = [...finishedBooks];
          const [removedFinished] = newFinishedItems.splice(result.source.index, 1);
          newFinishedItems.splice(result.destination.index, 0, removedFinished);
          setFinishedBooks(newFinishedItems);

          localStorage.setItem('finishedBooks', JSON.stringify(newFinishedItems));
          break;
      }
    }
  };

  return !readingBooks.length && !finishedBooks.length ? (
    <S.P>You don't have books now</S.P>
  ) : (
    <DragDropContext onDragEnd={(result) => onDrag(result)}>
      <S.ListGrid>
        <DroppableElement books={readingBooks} prefix={lists[0]} />
        <DroppableElement books={finishedBooks} prefix={lists[1]} />
      </S.ListGrid>
    </DragDropContext>
  );
};
