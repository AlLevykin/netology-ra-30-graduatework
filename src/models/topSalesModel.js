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
            const response = await fetch('api/top-sales');
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const items = await response.json();
            this.updateItems(items);
        }
    }
}