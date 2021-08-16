import { getData } from './utils';

export const topSalesModel = {
    name: 'topSales',
    state: [],
    reducers: {
        updateItems(state, items) {
            return [...items]
        }
    },
    effects: {
        async getTopSales() {
            await getData('api/top-sales').then(items =>
                this.updateItems(items)
            );
        }
    }
}