import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from "react-router-dom";
import store from '../../store';

const Product = () => {

    const { id } = useParams();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const sizeParam = searchParams.get('size');
    const countParam = Number(searchParams.get('count'));

    const history = useHistory();

    const { product, loading, success, error } = useSelector(
        (state) => ({ product: state.product, ...state.loading.models.product })
    )    

    useEffect(() => {
        store.dispatch.product.getProduct(id);
    }, [id]);

    useEffect(() => {
        if (error) {
            store.dispatch.log.addMessage({
                type: 'danger',
                caption: 'Страница товара',
                text: `Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`
            });
        }
    }, [error]);

    const [selectedSize, selectSize] = useState(sizeParam);

    const selectSizeHandler = (newSize) => {
        if (newSize === selectedSize) {
            selectSize(null);
        } else {
            selectSize(newSize);
        }
    }

    const [count, changeCount] = useState(
        (countParam < 1 || countParam > 10) ?
            1
            :
            countParam
    );

    const changeCountHandler = (a) => {
        const newValue = count + a;
        if (newValue > 0 && newValue < 11) changeCount(newValue);
    }

    const addItemHandler = () => {
        history.push("/cart.html");
        store.dispatch.order.addItem({
            id: product.id,
            title: product.title,
            size: selectedSize,
            price: product.price,
            count: count
        });
    }

    return (
        <>
            {
                loading &&
                <section className="catalog-item d-flex justify-content-center">
                    <div className="spinner-grow align-middle" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </section>
            }
            {
                success &&
                <section className="catalog-item">
                    <h2 className="text-center">{product.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <div className="ratio ratio-1x1">
                                <img src={product.images[0]} className="card-img" alt={product.title} />
                            </div>
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{product.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{product.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{product.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{product.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{product.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{product.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <p>
                                    Размеры в наличии:
                                    {
                                        product.sizes.map(item =>
                                            item.avalible &&
                                            <span
                                                className={`catalog-item-size ms-1 ${item.size === selectedSize && "selected"}`}
                                                key={item.size}
                                                onClick={() => selectSizeHandler(item.size)}
                                            >
                                                {item.size}
                                            </span>
                                        )
                                    }
                                </p>
                                <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => changeCountHandler(-1)}
                                    >
                                        -
                                    </button>
                                    <span className="btn btn-outline-primary">{count}</span>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => changeCountHandler(1)}
                                    >
                                        +
                                    </button>
                                </span>
                                </p>
                            </div>
                            <button
                                type="button"
                                className={`btn btn-danger btn-block btn-lg w-100 ${selectedSize === null && "disabled"}`}
                                onClick={addItemHandler}
                            >
                                В корзину
                            </button>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default Product;