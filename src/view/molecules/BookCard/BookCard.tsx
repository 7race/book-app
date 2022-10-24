import { ComponentPropsWithoutRef, FC } from 'react';
import StarIcon from '@mui/icons-material/Star';
import * as S from './BookCard.styled';

type BookCardProps = {
  imgUrl: string;
  title: string;
  star: boolean;
};

export const BookCard: FC<ComponentPropsWithoutRef<'div'> & BookCardProps> = ({ imgUrl, title, star, ...rest }) =>
  imgUrl ? (
    <S.BookCard {...rest}>
      <img src={imgUrl} alt='Book' />
      <title style={{ fontSize: '20px' }}>{title}</title>
      {star ? <StarIcon sx={S.Star} /> : null}
    </S.BookCard>
  ) : null;
