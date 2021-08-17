import { getData } from './utils';

export const catalogModel = {
    name: 'catalog',
    state: {params: {categoryId: 0, q: '', offset: 0}, items: [] },
    reducers: {
        updateItems(state, items) {
            return { ...state, items: [...items] }
        }
    },
    effects: {
        async getItems(payload, {catalog}) {            
            const searchParams = new URLSearchParams(catalog.params);
            const url = `api/items?${searchParams.toString()}`;
            await getData(url).then(items =>
                this.updateItems(items)
            );
        }
    }
}