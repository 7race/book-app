import { DndField } from '@organisms/RootPage/DndField';
import { getItemFromLocalStorage } from '../../../helpers/localStorage';

export const Root = () => {
  let savedBooks = null;
  const booksFromLS = getItemFromLocalStorage('books');

  if (booksFromLS) {
    savedBooks = booksFromLS;
  } else {
    savedBooks = [];
  }

  return <DndField>{savedBooks}</DndField>;
};
