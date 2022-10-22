import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { BookCard } from '@organisms/BookCard';
import { BookCardInfo } from '@organisms/BookCardInfo/BookCardInfo';
import Dialog from '@mui/material/Dialog';
import * as S from './SearchBookConteiner.styled';
import type { BookVolumeInfo } from '@organisms/BookCardInfo/BookCardInfo';
import type { MouseEvent } from 'react';

export const SearchBook = observer(() => {
  const { booksStore } = useContext(StoreContext);
  const { books, getBooks } = booksStore;
  const [open, setOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookVolumeInfo>({
    id: '',
    title: '',
    authors: [],
    imageLinks: { smallThumbnail: '', thumbnail: '' },
    description: '',
    infoLink: '',
    star: false,
  });

  // const getBooksFromLocalStorage = () => {
  //   const books = localStorage.getItem('books');
  //   if (books) {
  //     return JSON.parse(books);
  //   } else {
  //     return [];
  //   }
  // };

  // const [books, setBooks] = useState<BookItem[]>(getBooksFromLocalStorage);

  const requestBooks = async () => {
    await getBooks('java');
    // setBooksInLocalStorage();
    // const books = getBooksFromLocalStorage();
    // setBooks(books);

    // setBooks(JSON.parse(books));
  };

  const handleClose = () => setOpen(false);

  const showBookInfo = (
    e: MouseEvent<HTMLDivElement>,
    id: string,
    { title, authors, imageLinks, description, infoLink, star }: BookVolumeInfo
  ) => {
    setBookInfo({ id, title, authors, imageLinks, description, infoLink, star });
    setOpen(true);
  };

  return (
    <>
      <S.SearchBookContainer>
        {books.length &&
          books.map(({ id, volumeInfo }) => (
            <BookCard
              key={id}
              imgUrl={volumeInfo.imageLinks.smallThumbnail}
              title={volumeInfo.title}
              star={volumeInfo.star}
              onClick={(e) => showBookInfo(e, id, volumeInfo)}
            />
          ))}
      </S.SearchBookContainer>
      <Dialog open={open} onClose={handleClose}>
        <BookCardInfo
          title={bookInfo.title}
          authors={bookInfo.authors}
          imageLinks={bookInfo.imageLinks}
          description={bookInfo.description}
          infoLink={bookInfo.infoLink}
          star={bookInfo.star}
          id={bookInfo.id}
        />
      </Dialog>
      <button onClick={requestBooks}>click</button>
    </>
  );
});
