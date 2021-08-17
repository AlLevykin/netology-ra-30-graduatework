import { getData } from './utils';

export const categoriesModel = {
    name: 'categories',
    state: [],
    reducers: {
        updateCategories(state, categories) {
            return [{id: 0, title: "Все"}, ...categories]
        }
    },
    effects: {
        async getCategories() {
            await getData('api/categories').then(categories =>
                this.updateCategories(categories)
            );
        }
    }
}