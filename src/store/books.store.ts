import { makeAutoObservable, runInAction } from 'mobx';
import { BooksService } from 'services/books.service';

export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    infoLink: string;
    star: boolean;
    id: string;
  };
};

export class BooksStore {
  books: BookItem[] = [];

  constructor(private readonly booksService: BooksService) {
    makeAutoObservable(this);
  }

  getBooks = async (bookName: string) => {
    try {
      const books = await this.booksService.getBooks(bookName);
      runInAction(() => {
        this.books = [...books.items];
      });
    } catch (err) {
      throw err;
    }
  };

  setFavorites = (id: string) => {
    this.books.forEach((bookItem) => {
      if (id === bookItem.id) {
        bookItem.volumeInfo.star = true;
      }
    });
  };

  removeFavorites = (id: string) => {
    this.books.forEach((bookItem) => {
      if (id === bookItem.id) {
        bookItem.volumeInfo.star = false;
      }
    });
  };

  // setBooksInLocalStorage = () => {
  //   localStorage.setItem('books', JSON.stringify(this.books));
  // };
}
