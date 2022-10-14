import { AuthForm } from '@organisms/AuthForm';
import * as S from './Auth.styled';
import type { FC } from 'react';

export const Auth: FC = () => (
  <S.Auth>
    <AuthForm />
  </S.Auth>
);
