import { BaseURL } from '../utils/url';

export class BooksService {
  async getBooks(bookName: string) {
    const response = await fetch(
      `${BaseURL.BOOKS}/books/v1/volumes?q=${bookName}&key=AIzaSyDnA5fYQGPPSeJKwqwRhddHQ9_xnsS7Y1U`
    );

    const parsedResponse = await response.json();
    parsedResponse.items.map((item: Record<string, { star: boolean }>) => (item.volumeInfo.star = false));

    if (!response.ok) {
      throw new Error(parsedResponse);
    }

    return parsedResponse;
  }
}
