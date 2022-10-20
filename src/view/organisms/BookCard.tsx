import { ComponentPropsWithoutRef, FC } from 'react';
import * as S from './BookCard.styled';

type BookCardProps = {
  imgUrl: string;
  title: string;
};

export const BookCard: FC<ComponentPropsWithoutRef<'div'> & BookCardProps> = ({ imgUrl, title }) => (
  <S.BookCard>
    <img src={imgUrl} alt='Book' />
    <title>{title}</title>
  </S.BookCard>
);
