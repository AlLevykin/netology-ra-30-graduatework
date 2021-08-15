import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Payment from "./Payment";

const Footer = () =>
    <footer className="container bg-light">
        <div className="row">
            <div className="col">
                <Navbar />
            </div>
            <div className="col">
                <Payment />
                <Copyright />
            </div>
            <div className="col text-right">
                Контакты
            </div>
        </div>
    </footer>;

export default Footer;