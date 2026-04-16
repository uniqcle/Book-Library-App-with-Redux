import "./BookList.css";

import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { deleteBook, toggleFavor } from "../../redux/books/actionCreators";

const BookList = () => {
    const dispatch = useDispatch();

    const books = useSelector((state) => {
        return state.books;
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
                    {books.map((book, i) => (
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
