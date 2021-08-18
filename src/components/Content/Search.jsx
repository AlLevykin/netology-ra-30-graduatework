import store from '../../store';

const Search = () => {

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
            />
        </form>
    );
}

export default Search;