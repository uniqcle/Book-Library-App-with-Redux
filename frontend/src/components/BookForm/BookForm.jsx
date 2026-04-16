import { useState } from "react";
import createBookWithID from "../../utils/createBookWithID";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import booksData from "../../data/books.json";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            console.log(title, author);

            const newBook = createBookWithID({ title, author });
            console.log(addBook(newBook));
            dispatch(addBook(newBook));

            setTitle("");
            setAuthor("");
        }
    };

    const handleAddRandomBook = () => {
        const randIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randIndex];
        const randomBookWithId = createBookWithID(randomBook);

        dispatch(addBook(randomBookWithId));
    };

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>
                    Add Random
                </button>
            </form>
        </div>
    );
};

export default BookForm;
