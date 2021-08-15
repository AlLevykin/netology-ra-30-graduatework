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
            },
            {
                path: "/404.html",
                caption: "404",
                component: () => <h1>404</h1>,
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
        component: () => <h1>О маганине</h1>,
        items: []
    },
    {
        path: "/contacts.html",
        caption: "Контакты",
        component: () => <h1>Контакты</h1>,
        items: []
    }
]
