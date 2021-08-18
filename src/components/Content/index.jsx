import { Route, Switch } from 'react-router-dom';
import { pages } from '../../pages/config';
import Banner from '../../pages/Banner';
import NoMatch from '../../pages/NoMatch';

const Content = () => {

    const pageList = pages.flatMap(page => [page, ...page.items]);

    return (
        <main className="container">
            <div className="row">
                <Switch>
                    {
                        pageList.map(page =>
                            <Route key={page.path} path={page.path} component={page.component} exact />
                        )
                    }
                    <Route
                        key="NoMatch"
                        component={
                            () => <div className="col">
                                <Banner />
                                <NoMatch />
                            </div>
                        }
                    />
                </Switch>
            </div>
        </main>
    );
};

export default Content;