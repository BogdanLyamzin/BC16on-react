import {ADD_TO_CART, REMOVE_FROM_CART} from "./cartTypes";

const cartReducer = (store = [], {type, payload}) => {
    switch(type) {
        case ADD_TO_CART:
            return [...store, payload];
        case REMOVE_FROM_CART:
            return store.filter(item => item.id !== payload);
        default: 
            return store;
    }
}

export default cartReducer;