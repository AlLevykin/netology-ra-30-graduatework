import { Link } from "react-router-dom";

const CartLink = () =>
    <div className="header-controls-pic header-controls-cart">
        <Link className="stretched-link" to="cart.html" title="Корзина">
            <div className="header-controls-cart-menu"></div>
        </Link>
    </div>

export default CartLink;