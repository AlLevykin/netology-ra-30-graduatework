import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import store from '../../store';
import Card from './Card';

const TopSales = () => {

    const history = useHistory();

    const { items, loading, success, error } = useSelector(
        (state) => ({ items: state.topSales, ...state.loading.models.topSales })
    )    

    useEffect(() => {
        store.dispatch.topSales.getTopSales();
    }, []);

    useEffect(() => {
        if (error) {
            store.dispatch.log.addMessage({
                type: 'danger',
                caption: 'Хиты продаж',
                text: `Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`
            });
            history.push('/support.html');
        }
    }, [error, history]);

    return (
        <>
            {
                loading &&
                <section className="top-sales d-flex justify-content-center">
                    <div className="spinner-grow align-middle" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </section>
            }
            {
                success &&
                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    <div className="row row-cols-3 g-4">
                        {
                            items.map(item =>
                                <div className="col" key={item.id}>
                                    <Card id={item.id} title={item.title} price={item.price} image={item.images[0]} />
                                </div>
                            )
                        }
                    </div>
                </section>
            }
        </>
    );
};

export default TopSales;