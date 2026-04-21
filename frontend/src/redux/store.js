import { configureStore } from "@reduxjs/toolkit";
// Вызов старого редюсера
//import booksReducer from "./books/reducer";

import booksReducer from './slices/booksSlice'; 
import filterReducer from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer,
    },
});

export default store;
