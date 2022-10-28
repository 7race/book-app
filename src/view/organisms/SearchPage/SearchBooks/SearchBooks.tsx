import { FC, KeyboardEventHandler, useContext, useState } from 'react';
import booksFun from '@atoms/static/books-fun.png';
import { Quote } from '@atoms/Quote';
import { StoreContext } from '@store/store.context';
import * as S from './SearchBooks.styled';

export const SearchBooks: FC = () => {
  const [isFound, setIsFound] = useState<boolean>(false);
  const { booksStore } = useContext(StoreContext);
  const { getBooks } = booksStore;

  const [value, setValue] = useState<string>('');

  const requestBooks = async () => {
    await getBooks(value);

    const { books } = booksStore;

    if (books.length === 0) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  };

  const searchBooks: KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === 'Enter') {
      if (value === '') {
        return;
      }

      await requestBooks();
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
        {isFound && <p>not found :(</p>}
        <img src={booksFun} alt='books fun' />
      </S.Row2>
    </S.Container>
  );
};
