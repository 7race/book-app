import { createContext } from 'react';
import { AuthService } from '../services/auth.service';
import { AuthStore } from '../store/auth.store';

type StoreContext = {
  authStore: AuthStore;
};

const authService = new AuthService();
const authStore = new AuthStore(authService);

export const StoreContext = createContext<StoreContext>({
  authStore,
});
