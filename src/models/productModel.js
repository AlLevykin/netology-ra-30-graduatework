import { getData } from './utils';

export const productModel = {
    name: 'product',
    state: null,
    reducers: {
        updateProduct(state, product) {
            return { ...product }
        }
    },
    effects: {
        async getProduct(payload) {
            await getData(`api/items/${payload}`).then(product =>
                this.updateProduct(product)
            );
        }
    }
}