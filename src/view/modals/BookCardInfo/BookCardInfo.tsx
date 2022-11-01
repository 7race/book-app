import { BookItem } from '@store/books.store';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useContext, useState } from 'react';
import { StoreContext } from '@store/store.context';
import { getItemFromLocalStorage } from '../../../helpers/localStorage';
import * as S from './BookCardInfo.styled';

export type BookVolumeInfo = BookItem['volumeInfo'];

export const BookCardInfo = ({ id, title, authors, imageLinks, description, infoLink, star }: BookVolumeInfo) => {
  const { booksStore } = useContext(StoreContext);
  const { setFavorites, removeFavorites } = booksStore;

  const [isFavorite, setIsFavorite] = useState(star);

  const setFavorite = (
    id: string,
    title: string,
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
  ) => {
    setFavorites(id);
    setIsFavorite(true);

    const books = getItemFromLocalStorage('readingBooks');

    if (Array.isArray(books)) {
      books.push({ id, title, imageLinks });
      const uniqueIds: string[] = [];

      const readingBooks = books.filter((book) => {
        const isDuplicate = uniqueIds.includes(book.id);

        if (!isDuplicate) {
          uniqueIds.push(book.id);
          return true;
        }
        return false;
      });

      localStorage.setItem('readingBooks', JSON.stringify(readingBooks));
    } else {
      localStorage.setItem('readingBooks', `[${JSON.stringify({ id, title, imageLinks })}]`);
    }
  };

  const removeFavorite = (id: string) => {
    removeFavorites(id);
    setIsFavorite(false);

    const books = getItemFromLocalStorage('readingBooks');
    if (Array.isArray(books)) {
      const newBooks = books.filter((book) => book.id !== id);
      localStorage.setItem('readingBooks', JSON.stringify(newBooks));
    } else {
      return;
    }
  };

  return (
    <S.BookCardInfo>
      <S.Container>
        <img src={imageLinks.thumbnail} alt="book's info" />
        <S.Name>
          <S.Title>{title}</S.Title>
          <S.Author>{authors && authors.join('; ')}</S.Author>
          <S.SubContainer>
            <S.Link href={infoLink} target='_blank'>
              more
            </S.Link>
            {isFavorite ? (
              <StarIcon sx={S.Star} onClick={() => removeFavorite(id)} />
            ) : (
              <StarBorderIcon sx={S.Star} onClick={() => setFavorite(id, title, imageLinks)} />
            )}
          </S.SubContainer>
        </S.Name>
      </S.Container>
      <p>{description}</p>
    </S.BookCardInfo>
  );
};
