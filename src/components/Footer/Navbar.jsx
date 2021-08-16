import { NavLink } from 'react-router-dom';
import { pages } from '../../pages/config';

const Navbar = () =>
    <section>
        <h5>Информация</h5>
        <ul className="nav flex-column">
            {
                pages.map(page =>
                    <li key={page.path} className="nav-item">
                        <NavLink className="nav-link link-secondary" activeClassName="nav-link active" to={page.path} exact>{page.caption}</NavLink>
                    </li>
                )
            }
        </ul>
    </section>;

export default Navbar;