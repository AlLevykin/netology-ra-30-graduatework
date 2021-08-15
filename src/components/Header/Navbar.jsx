import { NavLink } from 'react-router-dom';
import { pages } from '../../pages/config';

const Navbar = () =>
    <ul className="navbar-nav mr-auto">
        {
            pages.map(page =>
                <li key={page.path} className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to={page.path} exact>{page.caption}</NavLink>
                </li>
            )
        }
    </ul>;

export default Navbar;