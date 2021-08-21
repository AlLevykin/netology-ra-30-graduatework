import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';

const Categories = () => {

    useEffect(() => {
        store.dispatch.categories.getCategories();
    }, []);

    const { categories, loading, success, error } = useSelector(
        (state) => ({ categories: state.categories, ...state.loading.models.categories })
    )

    const { categoryId } = useSelector(
        (state) => ({ categoryId: state.catalog.params.categoryId })
    )

    const categoryClickHandler = (id) => {
        store.dispatch.catalog.setCategory(id);
    }

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
                success &&
                <ul className="catalog-categories nav justify-content-center">
                    {
                        categories.map(category =>
                            <li key={category.id} className="nav-item">
                                <button
                                    className={`btn btn-lg nav-link link-secondary  ${categoryId === category.id ? "active" : ""}`}
                                    type="button"
                                    onClick={() => categoryClickHandler(category.id)}
                                >
                                    {category.title}
                                </button>
                            </li>
                        )
                    }
                </ul>
            }
        </>
    )
};

export default Categories;