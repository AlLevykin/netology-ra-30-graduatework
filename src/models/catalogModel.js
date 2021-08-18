import { getData } from './utils';

export const catalogModel = {
    name: 'catalog',
    state: { params: { categoryId: 0, q: '', offset: 0 }, items: [] },
    reducers: {
        updateItems(state, items) {
            let newItems = [];
            if (state.params.offset === 0) {
                newItems = [...items];
            } else {
                newItems = [...state.items, ...items];
            }
            return { ...state, items: [...newItems] }
        },
        updateCategory(state, categoryId) {
            return { params: { ...state.params, categoryId }, items: [] }
        },
        updateQuery(state, q) {
            return { ...state, params: { ...state.params, q } }
        },
        updateOffset(state, offset) {
            return { ...state, params: { ...state.params, offset } }
        }
    },
    effects: {
        async getItems(payload, { catalog }) {
            const searchParams = new URLSearchParams(catalog.params);
            const url = `api/items?${searchParams.toString()}`;
            await getData(url).then(items =>
                this.updateItems(items)
            );
        },
        setCategory(payload) {
            this.updateCategory(payload);
            this.getItems();
        },
        setQuery(payload) {
            this.updateQuery(payload);
        },
        search() {
            this.updateOffset(0);
            this.getItems();
        }
    }
}