import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import store from '../../store';

const Cart = () => {

    const order = useSelector(
        (state) => ({
            ...state.order,
            amount: state.order.items.reduce(
                (amount, item) => amount + item.price * item.count,
                0
            )
        })
    )

    const removeItemHandler = (id) => {
        store.dispatch.order.removeItem(id);
    }

    return (
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
                                        <td><Link to={`/catalog/${item.id}.html`}>{item.title}</Link></td>
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
            </section>
        </>
    );
}

export default Cart;