import { Link } from 'react-router-dom';

const Card = ({ id, title, price, image }) =>
    <div className="card catalog-item-card h-100">
        <div className="ratio ratio-1x1">
            <img src={image} className="card-img" alt={title} />
        </div>
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{`${price} руб.`}</p>
        </div>
        <div className="card-footer">
            <Link to={`/catalog/${id}.html`} className="btn btn-outline-primary stretched-link">Заказать</Link>
        </div>
    </div>;

export default Card;