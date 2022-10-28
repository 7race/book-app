import { FC, KeyboardEventHandler } from 'react';
import booksFun from '@atoms/static/books-fun.png';
import { Quote } from '@atoms/Quote';
import * as S from './SearchBooks.styled';

type SearchBooksProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  searchBooks: KeyboardEventHandler<HTMLInputElement>;
};

export const SearchBooks: FC<SearchBooksProps> = ({ value, setValue, searchBooks }) => (
  <S.Container>
    <S.Row1>
      <Quote>There are no limits to what you can accomplish, except the limits you place on your own thinking</Quote>
    </S.Row1>
    <S.Row2>
      <S.P>Find your book</S.P>
      <S.Input value={value} onKeyPress={(e) => searchBooks(e)} onChange={(e) => setValue(e.target.value)} />
      <img src={booksFun} alt='books fun' />
    </S.Row2>
  </S.Container>
);
