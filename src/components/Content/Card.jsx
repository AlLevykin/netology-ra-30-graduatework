const Card = ({ id, title, price, image }) =>
    <div className="card catalog-item-card h-100">
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{`${price} руб.`}</p>
        </div>
        <div className="card-footer">
            <a href={`/catalog/${id}.html`} className="btn btn-outline-primary stretched-link">Заказать</a>
        </div>
    </div>;

export default Card;