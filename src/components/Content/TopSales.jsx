import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';

const TopSales = () => {

    useEffect(() => {
        store.dispatch.topSales.getTopSales();
    }, []);

    const { items, loading, success } = useSelector(
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
                success && items.length &&
                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                </section>
            }
        </>
    );
};

export default TopSales;