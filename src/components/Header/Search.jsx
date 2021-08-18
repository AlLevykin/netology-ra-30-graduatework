const Search = () => {

    return (
        <>
            <form data-id="search-form" className="header-controls-search-form form-inline">
                <input className="form-control" placeholder="Поиск" />
            </form>
            <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
        </>
    );
};

export default Search;