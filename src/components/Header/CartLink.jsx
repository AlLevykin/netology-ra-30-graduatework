import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const CartLink = () => {

    const cartFull = useSelector(
        state => state.order.items.length
    )

    return (
        <div className="header-controls-pic header-controls-cart">
            <Link className="stretched-link" to="/cart.html" title="Корзина">
                <div className="header-controls-cart-menu"></div>
                {
                    (cartFull > 0) &&
                    <div className="header-controls-cart-full">{cartFull}</div>
                }
            </Link>
        </div>
    );
}

export default CartLink;