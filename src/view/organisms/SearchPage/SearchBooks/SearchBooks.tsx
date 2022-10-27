import { StoreContext } from '@store/store.context';
import { KeyboardEventHandler, useContext, useState } from 'react';
import booksFun from '@atoms/static/books-fun.png';
import { Quote } from '@atoms/Quote';
import * as S from './SearchBooks.styled';

export const SearchBooks = () => {
  const { booksStore } = useContext(StoreContext);
  const { getBooks } = booksStore;
  const [value, setValue] = useState<string>('');

  const requestBooks = async () => {
    await getBooks(value);
  };

  const searchBooks: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      requestBooks();
    }
  };

  return (
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
};
