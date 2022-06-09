import { nanoid } from "nanoid"
export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        private: false,
    },
    {
        id: nanoid(),
        to: "/my-books",
        text: "My Books",
        private: true,
    },
    {
        id: nanoid(),
        to: "/my-favorite-books",
        text: "My favorite books",
        private: true,
    }
]