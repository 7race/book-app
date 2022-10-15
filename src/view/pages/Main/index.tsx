import { Button } from '@atoms/Button';
import { StoreContext } from '@store/store.context';
import { FC, useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export const Main: FC = () => {
  const { authStore } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    authStore.logOut();
    navigate('/auth');
  };

  return (
    <>
      <header>
        <Button onClick={logout}>выйти</Button>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={'contacts/1'}>name</Link>
          </li>
          <li>
            <Link to={'contacts/2'}>age</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
