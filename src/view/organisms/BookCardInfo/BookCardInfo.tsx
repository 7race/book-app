import { BookItem } from '@store/books.store';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useContext, useState } from 'react';
import { StoreContext } from '@store/store.context';
import * as S from './BookCardInfo.styled';

export type BookVolumeInfo = BookItem['volumeInfo'];

export const BookCardInfo = ({ id, title, authors, imageLinks, description, infoLink, star }: BookVolumeInfo) => {
  const { booksStore } = useContext(StoreContext);
  const { setFavorites, removeFavorites } = booksStore;

  const [isFavorite, setIsFavorite] = useState(star);

  const setFavorite = () => {
    setFavorites(id);
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    removeFavorites(id);
    setIsFavorite(false);
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
              <StarIcon sx={S.Star} onClick={removeFavorite} />
            ) : (
              <StarBorderIcon sx={S.Star} onClick={setFavorite} />
            )}
          </S.SubContainer>
        </S.Name>
      </S.Container>
      <p>{description}</p>
    </S.BookCardInfo>
  );
};
