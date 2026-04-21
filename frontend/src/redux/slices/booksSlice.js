import { createSlice } from '@reduxjs/toolkit'; 
import axios from 'axios'
import createBookWithID from '../../utils/createBookWithID';

const initialState = []; 

const booksSlice = createSlice({
	name: 'books', 
	initialState,
	reducers: {
		addBook: (state, action) => {
			return [...state, action.payload];
		},
		deleteBook: (state, action) => {
			return state.filter((book) => book.id !== action.payload);
		}, 
		toggleFavor: (state, action) => {
			return state.map((book) => {
                if (book.id === action.payload) {
                    return { ...book, isFavor: !book.isFavor };
                } else {
                    return book;
                }
            });
		}
	}
})

export  const thunkFunction = async (dispatch, getState) => {
        try {
            const res = await axios.get("http://localhost:4000/random-book");

            if (res.data && res.data.title && res.data.author) {
                dispatch(addBook(createBookWithID(res.data, "api")));
            }
        } catch (e) {
            console.log(`Error fetching book`);
        }
    };

export default booksSlice.reducer; 

export const { addBook, deleteBook, toggleFavor } = booksSlice.actions; 