import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect, useState } from 'react';
import { BookCard } from '@molecules/BookCard';
import Dialog from '@mui/material/Dialog';
import { BookCardInfo } from '../../../modals/BookCardInfo';
import * as S from './Books.styled';
import type { MouseEvent } from 'react';
import type { BookVolumeInfo } from '../../../modals/BookCardInfo/BookCardInfo';

type BooksProps = {
  scrollToBooks: () => void;
};

export const Books: FC<BooksProps> = observer(({ scrollToBooks }) => {
  const { booksStore } = useContext(StoreContext);
  const { books } = booksStore;
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

  useEffect(() => {
    scrollToBooks();
  });

  const handleClose = () => setOpen(false);

  const showBookInfo = (
    e: MouseEvent<HTMLDivElement>,
    id: string,
    { title, authors, imageLinks, description, infoLink, star }: BookVolumeInfo
  ) => {
    setBookInfo({ id, title, authors, imageLinks, description, infoLink, star });
    setOpen(true);
  };

  return books.length ? (
    <>
      <S.SearchBookContainer>
        {books.map(({ id, volumeInfo }) => (
          <BookCard
            key={id}
            imgUrl={volumeInfo.imageLinks?.smallThumbnail}
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
    </>
  ) : null;
});
