import { sendData } from './utils';

export const orderModel = {
    name: 'order',
    state: {
        "owner": {
            "phone": '',
            "address": '',
          },
          "items": []
    },
    reducers: {
        addItem(state, item) {
            return { ...state, items: [state.items.filter(i => i.id !== item.id), item] }
        },
        removeItem(state, id) {
            return { ...state, items: [state.items.filter(i => i.id !== id)] }
        },
        clearOrder(state) {
            return { ...state, items: [] }
        },
        updateOwner(state, owner) {
            return { ...state, owner }            
        }
    },
    effects: {
        async saveOrder(payload, { order }) {
            await sendData('api/order', order).then(
                this.clearOrder()
            );
        }
    }
}