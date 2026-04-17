import { useDispatch, useSelector } from "react-redux";
import {
    setTitleFilter,
    setAuthorFilter,
    resetFilters,
    selectTitleFilter,
    setOnlyFavorFilter,
    selectOnlyFavorFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector((state) => state.author);
    const onlyFavorFilter = useSelector(selectOnlyFavorFilter);

    const handleInputTitleFilter = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleInputAuthorFilter = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    const handleOnlyFavorFilterChange = () => {
        console.log(setOnlyFavorFilter());
        dispatch(setOnlyFavorFilter());
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        value={titleFilter}
                        onChange={(e) => handleInputTitleFilter(e)}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by author..."
                        value={authorFilter}
                        onChange={(e) => handleInputAuthorFilter(e)}
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={onlyFavorFilter}
                            onChange={handleOnlyFavorFilterChange}
                        />
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
