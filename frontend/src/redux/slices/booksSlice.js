import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = [];

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);

            return res.data;
        } catch (e) {
            thunkAPI.dispatch(setError(e.message));
            throw e;
        }
    },
);

const booksSlice = createSlice({
    name: "books",
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
        },
    },
    // 1-й вариант создания extraReducer, с builder
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                const book = createBookWithID(action.payload, "API");
                state.push(book);
            }
        });
        //     // builder.addCase(fetchBook.rejected, (state, action) => {
        //     //      // Было когда ошибки хранил в этом слайсе
        //     //     // state.errors = action.error.message;

        //     // });
        //     //},
    },

    // 2-й вариант создания extraReducer, без builder
    // extraReducers: {
    //     [fetchBook.fulfilled]: (state, action) => {
    //         if (action.payload.title && action.payload.author) {
    //             const book = createBookWithID(action.payload, "API");
    //             state.push(book);
    //         }
    //     },
    // },
});


// Thunk function
// export const thunkFunction = async (dispatch, getState) => {
//     try {
//         const res = await axios.get("http://localhost:4000/random-book");

//         if (res.data && res.data.title && res.data.author) {
//             dispatch(addBook(createBookWithID(res.data, "api")));
//         }
//     } catch (e) {
//         console.log(`Error fetching book`);
//     }
// };

export default booksSlice.reducer;

export const { addBook, deleteBook, toggleFavor } = booksSlice.actions;
