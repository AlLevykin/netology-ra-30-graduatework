import Navbar from "./Navbar";

const Footer = () =>
    <footer className="container bg-light">
        <div className="row">
            <div className="col">
                <Navbar />
            </div>
            <div className="col">
                Оплата
            </div>
            <div className="col text-right">
                Контакты
            </div>
        </div>
    </footer>;

export default Footer;