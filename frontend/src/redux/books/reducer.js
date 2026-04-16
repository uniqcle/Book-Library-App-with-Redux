import * as actions from './actionTypes.js'; 
 

const initialState = []

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_BOOK:
            return [...state, action.payload];

        case actions.DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);

        case actions.TOOGLE_FAVOR:
            return state.map((book) => {
                if (book.id === action.payload) {
                    return { ...book, isFavor: !book.isFavor };
                } else {
                    return book;
                }
            });

        default:
            return state;
    }
};

export default booksReducer; 