export const getItemFromLocalStorage = (item: string) => {
  const books = localStorage.getItem(item);
  if (books) {
    return JSON.parse(books);
  } else {
    return '';
  }
};
