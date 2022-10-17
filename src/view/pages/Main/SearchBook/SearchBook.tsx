import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

export const SearchBook = observer(() => {
  const { booksStore } = useContext(StoreContext);
  const { books, getBooks } = booksStore;

  const requestBooks = async () => {
    await getBooks('java');
  };

  return (
    <>
      <ul>
        {books.length &&
          books.map(({ id, volumeInfo }) => (
            <li key={id}>
              <div>{volumeInfo.title}</div>
              <img src={volumeInfo.imageLinks.smallThumbnail} alt='books img' />
              <div>{volumeInfo.description}</div>
            </li>
          ))}
      </ul>
      <button onClick={requestBooks}>click</button>
    </>
  );
});
