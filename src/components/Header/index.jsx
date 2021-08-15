import logo from '../../img/header-logo.png';
import Navbar from './Navbar';

const Header = () =>
    <header className="container bg-light">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bosa Noga" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <Navbar />
                    </div>
                    <div>
                        <div className="header-controls-pics">

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>;

export default Header;