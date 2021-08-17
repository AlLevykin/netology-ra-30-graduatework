import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import Categories from "./Categories";
import Card from './Card';

const Catalog = () => {

    useEffect(() => {
        store.dispatch.catalog.getItems();
    }, []);

    const { items, loading, success, error } = useSelector(
        (state) => ({ items: [...state.catalog.items], ...state.loading.models.catalog })
    )

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Categories />
            {
                loading &&
                <div className="row justify-content-center">
                    <div className="spinner-grow align-middle" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            }
            {
                error &&
                <div className="row justify-content-center">
                    <div className="alert alert-danger" role="alert">
                        {`Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`}
                    </div>
                </div>
            }
            {
                success &&
                <div className="row row-cols-3 g-4">
                    {
                        items.map(item =>
                            <div className="col" key={item.id}>
                                <Card id={item.id} title={item.title} price={item.price} image={item.images[0]} />
                            </div>
                        )
                    }
                </div>
            }
        </section>
    );
}

export default Catalog;