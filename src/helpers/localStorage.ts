export const getItemFromLocalStorage = (item: string) => {
  const itemFromLS = localStorage.getItem(item);
  if (itemFromLS) {
    return JSON.parse(itemFromLS);
  } else {
    return '';
  }
};
