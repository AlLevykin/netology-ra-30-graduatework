import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import store from '../../store';

const Cart = () => {

    const [hasAgreement, setAgreement] = useState(false);

    const { order, loading, error } = useSelector(
        (state) => ({
            order: {
                ...state.order,
                amount: state.order.items.reduce(
                    (amount, item) => amount + item.price * item.count,
                    0
                )
            },
            ...state.loading.effects.order.saveOrder
        })
    )

    useEffect(() => {
        if (error) {
            store.dispatch.log.addMessage({
                type: 'danger',
                caption: 'Оформление заказа',
                text: `Во время оформления заказа произошла ошибка (${error}).`
            });
        }
    }, [error]); 
    
    useEffect(() => {
        if (order.isSaved) {
            store.dispatch.log.addMessage({
                type: 'success',
                caption: 'Оформление заказа',
                text: 'Заказ успешно оформлен.'
            });
        }
    }, [order.isSaved]);    

    const isOrderValid = order.items.length > 0 &&
        order.owner.phone &&
        order.owner.address &&
        hasAgreement;

    const removeItemHandler = (id) => {
        store.dispatch.order.removeItem(id);
    }

    const onPhoneChangeHandler = (event) => {
        store.dispatch.order.setOwnerPhone(event.target.value);
    }

    const onAddressChangeHandler = (event) => {
        store.dispatch.order.setOwnerAddress(event.target.value);
    }

    const onAgreementChangeHandler = (event) => {
        setAgreement(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        store.dispatch.order.saveOrder();
    }

    return (
        <>
            {
                loading &&
                <section className="cart d-flex justify-content-center">
                    <div className="spinner-grow align-middle" role="status">
                        <span className="visually-hidden">Оформление заказа ...</span>
                    </div>
                </section>
            }
            {
                order.isSaved &&
                <section className="cart d-flex justify-content-center">
                    <div className="alert alert-success w-100" role="alert">
                        Заказ оформлен.
                        <Link
                            to="/catalog.html"
                            className="btn btn-success mx-3"
                        >
                            Продолжить покупки
                        </Link>
                    </div>
                </section>
            }
            {!loading && !error && !order.isSaved &&
                <>
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        {
                            order.items.length === 0 &&
                            <div className="alert alert-danger" role="alert">
                                Корзина пуста.
                            </div>
                        }
                        {
                            order.items.length > 0 &&
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Название</th>
                                        <th scope="col">Размер</th>
                                        <th scope="col">Кол-во</th>
                                        <th scope="col">Стоимость</th>
                                        <th scope="col">Итого</th>
                                        <th scope="col">Действия</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5" className="text-right">Общая стоимость</td>
                                        <td colSpan="2">{order.amount} руб.</td>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        order.items.map((item, num) =>
                                            <tr key={item.id}>
                                                <th scope="row">{num + 1}</th>
                                                <td>
                                                    <Link
                                                        to={`/catalog/${item.id}.html?size=${item.size}&count=${item.count}`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td>{item.size}</td>
                                                <td>{item.count}</td>
                                                <td>{item.price} руб.</td>
                                                <td>{item.count * item.price} руб.</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-danger btn-sm"
                                                        type="button"
                                                        onClick={() => removeItemHandler(item.id)}
                                                    >
                                                        Удалить
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        }
                    </section>
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                        <div className="card order-card">
                            <form className="card-body" onSubmit={onSubmitHandler}>
                                <div className="form-group mb-3">
                                    <label htmlFor="phone">Телефон</label>
                                    <input
                                        className={`form-control ${!order.owner.phone && "is-invalid"}`}
                                        id="phone"
                                        placeholder="Ваш телефон"
                                        value={order.owner.phone}
                                        onChange={onPhoneChangeHandler}
                                    />
                                    <div className="invalid-feedback">
                                        Необходимо указать номер телефона.
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="address">Адрес доставки</label>
                                    <input
                                        className={`form-control ${!order.owner.address && "is-invalid"}`}
                                        id="address"
                                        placeholder="Адрес доставки"
                                        value={order.owner.address}
                                        onChange={onAddressChangeHandler}
                                    />
                                    <div className="invalid-feedback">
                                        Необходимо указать адрес доставки.
                                    </div>
                                </div>
                                <div className="form-group form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className={`form-check-input ${!hasAgreement && "is-invalid"}`}
                                        id="agreement"
                                        value={hasAgreement}
                                        onChange={onAgreementChangeHandler}
                                    />
                                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                                    <div className="invalid-feedback">
                                        Необходимо подтвердить согласие с правилами доставки.
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn btn-outline-secondary mb-3 ${!isOrderValid && "disabled"}`}
                                >
                                    Оформить
                                </button>
                            </form>
                        </div>
                    </section>
                </>
            }
        </>
    );
}

export default Cart;