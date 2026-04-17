import "./BookList.css";

import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { deleteBook, toggleFavor } from "../../redux/books/actionCreators";
import {
    selectTitleFilter,
    selectAuthorFilter,
} from "../../redux/slices/filterSlice";

const BookList = () => {
    const dispatch = useDispatch();

    const books = useSelector((state) => {
        return state.books;
    });
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());

        return matchesTitle && matchesAuthor;
    });

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavor = (id) => {
        dispatch(toggleFavor(id));
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}.{book.title} by{" "}
                                <strong>{book.author}</strong>
                            </div>

                            <div className="book-actions">
                                {book.isFavor ? (
                                    <MdOutlineFavorite
                                        className="star-icon"
                                        onClick={(e) =>
                                            handleToggleFavor(book.id)
                                        }
                                    />
                                ) : (
                                    <MdFavoriteBorder
                                        className="star-icon"
                                        onClick={(e) =>
                                            handleToggleFavor(book.id)
                                        }
                                    />
                                )}

                                <button onClick={() => handleDelete(book.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
