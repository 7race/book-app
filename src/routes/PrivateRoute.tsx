import { StoreContext } from '@store/store.context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  if (!authenticated) {
    return <Navigate to='/auth' />;
  }

  return <>{children}</>;
};
