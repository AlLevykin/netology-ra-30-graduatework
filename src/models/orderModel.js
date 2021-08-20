import { sendData } from './utils';

export const orderModel = {
    name: 'order',
    state: {
        "owner": {
            "phone": '',
            "address": '',
        },
        "items": [],
        isSaved: false
    },
    reducers: {
        updateAddedItem(state, item) {
            return { ...state, items: [...state.items.filter(i => i.id !== item.id), item], isSaved: false }
        },
        updateRemovedItem(state, id) {
            return { ...state, items: state.items.filter(i => i.id !== id) }
        },
        clearOrder(state) {
            return { ...state, items: [] }
        },
        updateOwner(state, owner) {
            return { ...state, owner }
        },
        setSaved(state, isSaved) {
            return { ...state, isSaved }
        }        
    },
    effects: {
        async saveOrder(payload, { order }) {
            await sendData('api/order', order).then( response => {
                if (response.ok) {
                    this.clearOrder();
                    this.setSaved(true);                    
                }
            });
        },
        addItem(payload) {
            this.updateAddedItem(payload);
        },
        removeItem(payload) {
            this.updateRemovedItem(payload);
        },
        setOwnerPhone(payload, { order }) {
            this.updateOwner({...order.owner, phone: payload});
        },
        setOwnerAddress(payload, { order }) {
            this.updateOwner({...order.owner, address: payload});
        }
    }
}