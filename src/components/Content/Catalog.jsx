import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import store from '../../store';
import Categories from "./Categories";
import Card from './Card';
import Search from './Search';
import LoadingButton from './LoadingButton';

const Catalog = ({ hasSearchForm }) => {

    const history = useHistory();

    const { items, loading, success, error } = useSelector(
        (state) => ({ items: state.catalog.items, ...state.loading.models.catalog })
    )

    useEffect(() => {
        if (error) {
            store.dispatch.log.addMessage({
                type: 'danger',
                caption: 'Каталог',
                text: `Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`
            });
            history.push('/support.html');
        }
    }, [error, history]);

    useEffect(() => {
        if (items.length === 0 && success) {
            store.dispatch.log.addMessage({
                type: 'warning',
                caption: 'Каталог',
                text: 'Список товаров в каталоге пуст. Выбирете другую категорию товаров или введите новую строку поиска.'
            });
        }
    }, [items.length, success]);    

    useEffect(() => {
        if (!hasSearchForm) store.dispatch.catalog.setQuery('');
        store.dispatch.catalog.getItems();
    }, [hasSearchForm]);

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {
                hasSearchForm && <Search />
            }
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
                success &&
                <>
                    <div className="row row-cols-3 g-4">
                        {
                            items.map(item =>
                                <div className="col" key={item.id}>
                                    <Card id={item.id} title={item.title} price={item.price} image={item.images[0]} />
                                </div>
                            )
                        }
                    </div>
                    <LoadingButton />
                </>
            }
        </section>
    );
}

export default Catalog;