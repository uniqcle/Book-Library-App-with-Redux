import "./BookList.css";

import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
//import { deleteBook, toggleFavor } from "../../redux/books/actionCreators";
import { deleteBook, toggleFavor } from "../../redux/slices/booksSlice";
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavorFilter,
} from "../../redux/slices/filterSlice";

const BookList = () => {
    const dispatch = useDispatch();

    const books = useSelector((state) => {
        return state.books;
    });
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavorFilter = useSelector(selectOnlyFavorFilter);

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());

        const matchesFavor = onlyFavorFilter ? book.isFavor : true;

        return matchesTitle && matchesAuthor && matchesFavor;
    });

    const hightLightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, "gi");

        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
    };

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
                                {++i}.{hightLightMatch(book.title, titleFilter)}{" "}
                                by{" "}
                                <strong>
                                    {hightLightMatch(book.author, authorFilter)}
                                </strong>{" "}
                                ({book.source})
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
