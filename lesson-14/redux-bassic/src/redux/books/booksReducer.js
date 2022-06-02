import { ADD_BOOK, REMOVE_BOOK } from "./booksTypes";

const booksReducer = (store = [], action) => {
    switch(action.type){
        case ADD_BOOK:
            const newStore = [...store, action.payload];
            return newStore;
        case REMOVE_BOOK:
            return store.filter(item => item.id !== action.payload);
        default:
            return store;
    }
}

export default booksReducer;