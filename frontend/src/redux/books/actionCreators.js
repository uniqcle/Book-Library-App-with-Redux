import * as action from './actionTypes'; 

 const addBook = (newBook) => {
	return {
		type: action.ADD_BOOK,
		payload: newBook
	}
}

export {addBook}