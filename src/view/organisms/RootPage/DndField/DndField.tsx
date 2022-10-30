import { BookCard } from '@molecules/BookCard';
import { FC } from 'react';
import * as S from './DndField.styled';

type DndFieldProps = {
  children: [
    {
      id: string;
      title: string;
      imageLinks: { smallThumbnail: string; thumbnail: string };
    }
  ];
};

export const DndField: FC<DndFieldProps> = ({ children }) => (
  <S.DndField>
    {children.map((book) => (
      <BookCard key={book.id} imgUrl={book.imageLinks.thumbnail} title={book.title} />
    ))}
  </S.DndField>
);
