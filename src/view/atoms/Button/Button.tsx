import * as S from './Button.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const Button: FC<ComponentPropsWithoutRef<'button'>> = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
);
