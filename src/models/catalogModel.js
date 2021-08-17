import { getData } from './utils';

export const catalogModel = {
    name: 'catalog',
    state: {params: {categoryId: 0, q: '', offset: 0}, items: [] },
    reducers: {
        updateItems(state, items) {
            return { ...state, items: [...items] }
        },
        updateCategory(state, id) {
            return { params: {...state.params, categoryId: id}, items: [] }
        }
    },
    effects: {
        async getItems(payload, {catalog}) {            
            const searchParams = new URLSearchParams(catalog.params);
            const url = `api/items?${searchParams.toString()}`;
            await getData(url).then(items =>
                this.updateItems(items)
            );
        },
        setCategory(payload) {
            this.updateCategory(payload);
            this.getItems();
        }
    }
}