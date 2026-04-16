import { useDispatch, useSelector } from "react-redux";
import {
    setTitleFilter,
    selectTitleFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);

    const handleInputTitleFilter = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <input
                    type="text"
                    placeholder="Filter by title..."
                    value={titleFilter}
                    onChange={(e) => handleInputTitleFilter(e)}
                />
            </div>
        </div>
    );
};

export default Filter;
