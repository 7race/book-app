import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';
import { StoreContext } from '@store/store.context';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './AuthForm.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';

type FormPorps = {
  email: string;
  password: string;
};

export const AuthForm: FC<ComponentPropsWithoutRef<'form'>> = observer(() => {
  const [serverError, setServerError] = useState<boolean>(false);
  const [tooManyErrors, setTooManyErrors] = useState('');
  const { authStore } = useContext(StoreContext);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormPorps>();

  const onSubmit: SubmitHandler<FormPorps> = ({ email, password }) => {
    authStore
      .login({ email, password })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        if (err.message.includes('auth/too-many-requests')) {
          setTooManyErrors(
            `Access to this account has been temporarily disabled due to many failed login attempts.
            You can try again later`
          );
        } else {
          setTooManyErrors('');
        }

        setServerError(true);
      });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <span>email: test@mail.ru // password: qaz123</span>
      <Input label='email' variant='outlined' autoComplete='email' {...register('email', { required: true })} />
      <Input
        type='password'
        label='password'
        variant='outlined'
        autoComplete='current-password'
        {...register('password', { required: true })}
      />
      <Button>Submit</Button>
      {serverError && !tooManyErrors && <div style={{ color: '#572747' }}>Invalid email or password</div>}
      {tooManyErrors && <div style={{ color: '#572747' }}>{tooManyErrors}</div>}
    </S.Form>
  );
});
