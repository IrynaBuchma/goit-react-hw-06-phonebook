import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/phonebook/filterSlice";
import { getFilter } from "redux/phonebook/selectors";
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter() {
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChangeFilter = e => dispatch(setFilter(e.target.value));

    return (
      <>
        <label className={css.label} name="filter" value="filterValue" htmlFor="filter">
            Find contact by name
            <input className={css.input}
                type="text"
                value={filterValue}
                id="filter"
                onChange={handleChangeFilter}/>
        </label>
      </>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}