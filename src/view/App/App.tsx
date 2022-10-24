import { Outlet } from 'react-router-dom';
import { AppHeader } from '@organisms/AppHeader';

export const App = () => (
  <>
    <AppHeader />
    <Outlet />
  </>
);
