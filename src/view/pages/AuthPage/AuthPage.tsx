import { AuthForm } from '@organisms/AuthForm';
import { StoreContext } from '@store/store.context';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import * as S from './AuthPage.styled';
import type { FC } from 'react';

export const AuthPage: FC = () => {
  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  return authenticated ? (
    <Navigate to='/' />
  ) : (
    <S.Auth>
      <AuthForm />
    </S.Auth>
  );
};
