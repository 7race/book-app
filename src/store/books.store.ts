import { makeAutoObservable, runInAction } from 'mobx';
import { BooksService } from 'services/books.service';

type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
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
}
