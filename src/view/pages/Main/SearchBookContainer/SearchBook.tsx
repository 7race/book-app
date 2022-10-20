import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { BookCard } from '@organisms';
import * as S from './SearchBookConteiner.styled';

export const SearchBook = observer(() => {
  const { booksStore } = useContext(StoreContext);
  const { books, getBooks } = booksStore;

  const requestBooks = async () => {
    await getBooks('java');
  };

  return (
    <>
      <S.SearchBookContainer>
        {books.length &&
          books.map(({ id, volumeInfo }) => (
            <BookCard key={id} imgUrl={volumeInfo.imageLinks.smallThumbnail} title={volumeInfo.title} />
          ))}
      </S.SearchBookContainer>
      <button onClick={requestBooks}>click</button>
    </>
  );
});
