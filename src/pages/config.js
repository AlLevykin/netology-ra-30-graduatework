import Contacts from "./Contacts";
import About from "./About";
import Banner from "./Banner";
import Catalog from "../components/Content/Catalog";
import Cart from "../components/Content/Cart";
import Home from "../components/Content/Home";
import Product from "../components/Content/Product";
import Support from "./Support";

export const pages = [
    {
        path: "/",
        caption: "Главная",
        component: () => <Home />,
        items: [
            {
                path: "/cart.html",
                caption: "Корзина",
                component: () => <div className="col">
                        <Cart />
                    </div>,
                items: []
            },
            {
                path: "/support.html",
                caption: "Техническая поддержка",
                component: () => <div className="col">
                        <Support />
                    </div>,
                items: []
            }            
        ]
    },
    {
        path: "/catalog.html",
        caption: "Каталог",
        component: () => <div className="col">
                <Banner />
                <Catalog hasSearchForm />
            </div>,
        items: [
            {
                path: "/catalog/:id.html",
                caption: "Карточка товара",
                component: () => <Product />,
                items: []
            }
        ]
    },
    {
        path: "/about.html",
        caption: "О маганине",
        component: () => <div className="col">
                <Banner />
                <About />
            </div>,
        items: []
    },
    {
        path: "/contacts.html",
        caption: "Контакты",
        component: () => <div className="col">
                <Banner />
                <Contacts />
            </div>,
        items: []
    }
]
