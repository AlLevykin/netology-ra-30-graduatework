import { Link } from "react-router-dom";
import logo from '../../img/header-logo.png';
import CartLink from './CartLink';
import Navbar from './Navbar';
import Search from "./Search";

const Header = () =>
    <header className="container bg-light sticky-top">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Bosa Noga" />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <Navbar />
                    </div>
                    <div>
                        <div className="header-controls-pics">
                            <Search />
                            <CartLink />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>;

export default Header;