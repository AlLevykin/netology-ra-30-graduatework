import { getData } from './utils';

export const catalogModel = {
    name: 'catalog',
    state: { params: { categoryId: 0, q: '', offset: 0 }, items: [], hasMoreData: true },
    reducers: {
        updateItems(state, items) {
            let newItems = [];
            if (state.params.offset === 0) {
                newItems = items;
            } else {
                newItems = [...state.items, ...items];
            }
            return {
                ...state,
                items: [...newItems],
                hasMoreData: items.length === 6,
                params: {
                    ...state.params,
                    offset: items.length === 6 ? state.params.offset + 6 : 0
                }
            }
        },
        updateCategory(state, categoryId) {
            return { params: { ...state.params, categoryId, offset: 0 }, items: [] }
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