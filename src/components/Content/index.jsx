import { Route } from 'react-router-dom';
import { pages } from '../../pages/config';

const Content = () => {

    const pagesToRoutes = () => {
        const pageList = pages.flatMap(page => [page, ...page.items]);
        return pageList.map(page =>
            <Route key={page.path} path={page.path} component={page.component} exact />
        );
    };

    return (
        <main className="container">
            <div className="row">
                {pagesToRoutes()}
            </div>
        </main>
    );
};

export default Content;