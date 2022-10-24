import { StoreContext } from '@store/store.context';
import { KeyboardEventHandler, useContext, useState } from 'react';

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

  return <input value={value} onKeyPress={(e) => searchBooks(e)} onChange={(e) => setValue(e.target.value)} />;
};
