import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import Card from './Card';

const TopSales = () => {

    useEffect(() => {
        store.dispatch.topSales.getTopSales();
    }, []);

    const { items, loading, success, error } = useSelector(
        (state) => ({ items: [...state.topSales], ...state.loading.models.topSales })
    )

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
                error &&
                <section className="top-sales d-flex justify-content-center">
                    <div className="alert alert-danger" role="alert">
                        {`Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`}
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