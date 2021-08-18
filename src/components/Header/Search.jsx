import { useState } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import store from '../../store';

const Search = () => {

    const history = useHistory();

    const q = useSelector(
        (state) => state.catalog.params.q
    )

    const [formInisible, changeFormVisibility] = useState(true);

    const onChangeHandler = (event) => {
        const value = event.target.value;
        store.dispatch.catalog.setQuery(value);
    }

    const searchClickHandler = () => {
        search();
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        search();
    }

    const search = () => {
        if (!formInisible) {
            history.push("/catalog.html");
            store.dispatch.catalog.search();            
        }
        changeFormVisibility(!formInisible);
    }

    return (
        <>
            <form
                data-id="search-form"
                className={`header-controls-search-form form-inline${formInisible ? " invisible" : ""}`}
                onSubmit={onSubmitHandler}
            >
                <input
                    className="form-control"
                    placeholder="Поиск"
                    onChange={onChangeHandler}
                    value={q}
                />
            </form>
            <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={searchClickHandler}></div>
        </>
    );
};

export default Search;