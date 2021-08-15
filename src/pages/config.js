import Contacts from "./Contacts";
import About from "./About";
import Banner from "./Banner";

export const pages = [
    {
        path: "/",
        caption: "Главная",
        component: () => <h1>Главная</h1>,
        items: [
            {
                path: "/cart.html",
                caption: "Корзина",
                component: () => <h1>Корзина</h1>,
                items: []
            }
        ]
    },
    {
        path: "/catalog.html",
        caption: "Каталог",
        component: () => <h1>Каталог</h1>,
        items: [
            {
                path: "/catalog/:id.html",
                caption: "Карточка товара",
                component: () => <h1>Карточка товара</h1>,
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
