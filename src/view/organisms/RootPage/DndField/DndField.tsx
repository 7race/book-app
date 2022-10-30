import { BookCard } from '@molecules/BookCard';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import * as S from './DndField.styled';

type DndFieldProps = {
  books: {
    id: string;
    title: string;
    imageLinks: { smallThumbnail: string; thumbnail: string };
  }[];
};

export const DndField: FC<ComponentPropsWithRef<'div'> & DndFieldProps> = forwardRef(({ books, ...rest }, ref) => (
  <S.DndField {...rest} ref={ref}>
    {books.map((book) => (
      <BookCard key={book.id} imgUrl={book.imageLinks.thumbnail} title={book.title} />
    ))}
  </S.DndField>
));
