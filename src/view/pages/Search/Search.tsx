import { Books } from '@organisms/SearchPage/Books';
import { SearchBooks } from '@organisms/SearchPage/SearchBooks';
import { useRef } from 'react';

export const Search = () => {
  const anchor = useRef<HTMLDivElement>(null);

  const scrollToBooks = () => {
    anchor.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <SearchBooks />
      <div ref={anchor}></div>
      <Books scrollToBooks={scrollToBooks} />
    </>
  );
};
