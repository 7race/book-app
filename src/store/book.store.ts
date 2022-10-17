import { makeAutoObservable } from 'mobx';
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

  async getBooks(bookName: string) {
    try {
      const books = await this.booksService.getBooks(bookName);
      this.books = [...books];
    } catch (err) {
      throw err;
    }
  }
}
