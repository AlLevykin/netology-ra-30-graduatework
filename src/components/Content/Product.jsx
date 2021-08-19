import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import store from '../../store';

const Product = () => {

    const match = useRouteMatch();

    const id = match.params.id;

    useEffect(() => {
        store.dispatch.product.getProduct(id);
    }, [id]);

    const { product, loading, success, error } = useSelector(
        (state) => ({ product: { ...state.product }, ...state.loading.models.product })
    )

    const [selectedSize, selectSize] = useState(null);

    const selectSizeHandler = (newSize) => {
        if (newSize === selectedSize) {
            selectSize(null);
        } else {
            selectSize(newSize);
        }
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
                error &&
                <section className="catalog-item d-flex justify-content-center">
                    <div className="alert alert-danger" role="alert">
                        {`Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`}
                    </div>
                </section>
            }
            {
                success &&
                <section className="catalog-item">
                    <h2 className="text-center">{product.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={product.images[0]} className="img-fluid" alt={product.title} />
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
                                    <button className="btn btn-secondary">-</button>
                                    <span className="btn btn-outline-primary">1</span>
                                    <button className="btn btn-secondary">+</button>
                                </span>
                                </p>
                            </div>
                            <button className={`btn btn-danger btn-block btn-lg w-100 ${selectedSize === null && "disabled"}`}>В корзину</button>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default Product;