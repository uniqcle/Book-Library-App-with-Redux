import * as action from "./actionTypes";

const addBook = (newBook) => {
    return {
        type: action.ADD_BOOK,
        payload: newBook,
    };
};

const deleteBook = (id) => {
    return {
        type: action.DELETE_BOOK,
        payload: id,
    };
};

const toggleFavor = (id) => {
    return {
        type: action.TOOGLE_FAVOR,
        payload: id,
    };
};

export { addBook, deleteBook, toggleFavor };
