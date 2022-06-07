export const getLoading = ({books}) => books.loading; 
export const getError = ({books}) => books.error; 
export const getbooks = ({books}) => books.items;
export const getFavoriteBooks = ({books}) => books.items.filter(item => item.favorite);