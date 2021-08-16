const Card = ({ id, title, price, image }) =>
    <div className="card catalog-item-card h-100">
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{`${price} руб.`}</p>
            <a href={`/products/${id}.html`} className="btn btn-outline-primary">Заказать</a>
        </div>
    </div>;

export default Card;