import { StoreContext } from '@store/store.context';
import { FC, useContext, useEffect } from 'react';
import uniqid from 'uniqid';
import * as S from './Quote.styled';

type TextTitleProps = {
  children: string;
};

export const Quote: FC<TextTitleProps> = ({ children }) => {
  const { authStore } = useContext(StoreContext);
  const { flag, setFlag } = authStore;

  useEffect(() => {
    setFlag();
  }, [setFlag]);

  return flag ? (
    <S.Quote>
      {children.split(' ').map((v) => {
        const id = uniqid();
        return <S.Span key={id}>{v}&nbsp;</S.Span>;
      })}
    </S.Quote>
  ) : (
    <S.AppearAnimation>
      <S.Quote>
        {children.split(' ').map((v) => {
          const id = uniqid();
          return <S.Span key={id}>{v}&nbsp;</S.Span>;
        })}
      </S.Quote>
    </S.AppearAnimation>
  );
};
