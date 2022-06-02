import { nanoid } from "nanoid"
export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/my-books",
        text: "My Books"
    },
    {
        id: nanoid(),
        to: "/my-favorite-books",
        text: "My favorite books"
    },
    {
        id: nanoid(),
        to: "/products",
        text: "Products"
    },
    {
        id: nanoid(),
        to: "/cart",
        text: "Cart"
    }    
]