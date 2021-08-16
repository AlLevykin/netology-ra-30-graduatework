import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../../store';

const Categories = () => {

    useEffect(() => {
        store.dispatch.categories.getCategories();
    }, []);

    const { categories, loading, success, error } = useSelector(
        (state) => ({ categories: [...state.categories], ...state.loading.models.categories })
    )

    return (
        <>
            {
                loading &&
                <div className="catalog-categories d-flex justify-content-center">
                    <div className="spinner-grow align-middle" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            }
            {
                error &&
                <section className="top-sales d-flex justify-content-center">
                    <div className="alert alert-danger" role="alert">
                        {`Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`}
                    </div>
                </section>
            }
            {
                success && categories.length &&
                <ul className="catalog-categories nav justify-content-center">
                    {
                        categories.map(category =>
                            <li key={category.id} className="nav-item">
                                <NavLink className="nav-link link-secondary" activeClassName="nav-link active" to={`api/items${category.id ? "?categoryId=" + category.id : ""}`} exact>{category.title}</NavLink>
                            </li>
                        )
                    }
                </ul>
            }
        </>
    )
};

export default Categories;