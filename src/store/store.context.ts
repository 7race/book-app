import { createContext } from 'react';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';
import { AuthStore } from '../store/auth.store';
import { BooksStore } from './books.store';

type StoreContextProps = {
  authStore: AuthStore;
  booksStore: BooksStore;
};

const authService = new AuthService();
const authStore = new AuthStore(authService);

const booksService = new BooksService();
const booksStore = new BooksStore(booksService);

export const StoreContext = createContext<StoreContextProps>({
  authStore,
  booksStore,
});
