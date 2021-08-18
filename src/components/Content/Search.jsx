import { useSelector } from 'react-redux';
import store from '../../store';

const Search = () => {

    const q = useSelector(
        (state) => state.catalog.params.q
    )        

    const onChangeHandler = (event) => {
        const value = event.target.value;
        store.dispatch.catalog.setQuery(value);
        if (value === '') {
            store.dispatch.catalog.search();
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        store.dispatch.catalog.search();
    }

    return (
        <form
            className="catalog-search-form form-inline"
            onSubmit={onSubmitHandler}
        >
            <input
                className="form-control"
                type="search"
                placeholder="Поиск"
                onChange={onChangeHandler}
                value={q}
            />
        </form>
    );
};

export default Search;