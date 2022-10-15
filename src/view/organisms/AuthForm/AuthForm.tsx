import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';
import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './AuthForm.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';
import type { MouseEventHandler } from 'react';

export const AuthForm: FC<ComponentPropsWithoutRef<'form'>> = observer(() => {
  const { authStore } = useContext(StoreContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    authStore
      .login({ email, password })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.Form>
      <span>login: eve.holt@reqres.in // password: cityslicka</span>
      <Input label='login' variant='outlined' value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input
        type='password'
        label='password'
        variant='outlined'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={(e) => login(e)}>Submit</Button>
    </S.Form>
  );
});
