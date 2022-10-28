import { Books } from '@organisms/SearchPage/Books';
import { SearchBooks } from '@organisms/SearchPage/SearchBooks';
import { StoreContext } from '@store/store.context';
import { KeyboardEventHandler, useContext, useRef, useState } from 'react';

export const Search = () => {
  const anchor = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>('');
  const { booksStore } = useContext(StoreContext);
  const { getBooks } = booksStore;

  const requestBooks = async () => {
    await getBooks(value);
  };

  const scrollToBooks = () => {
    anchor.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const searchBooks: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      requestBooks();
    }
  };

  return (
    <>
      <SearchBooks value={value} setValue={setValue} searchBooks={searchBooks} />
      <div ref={anchor}></div>
      <Books scrollToBooks={scrollToBooks} />
    </>
  );
};
