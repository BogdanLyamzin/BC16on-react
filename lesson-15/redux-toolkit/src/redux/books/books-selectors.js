export const getbooks = store => store.books;
export const getFavoriteBooks = store => store.books.filter(item => item.favorite);