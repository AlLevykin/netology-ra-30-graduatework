export const logModel = {
    name: 'log',
    state: [],
    reducers: {
        updateAddedMessage(state, message) {
            return [...state, {
                time: Date.now(),
                type: message.type,
                caption: message.caption,
                text: message.text
            }]
        },
        cutMessages(state) {
            if (state.length > 0) {
                const time = Date.now();
                return state.filter(message => (time - message.time) < 5000);
            } else {
                return state;
            }
        },
    },
    effects: {
        addMessage(payload) {           
            this.updateAddedMessage(payload);
        },
        refresh() {
            this.cutMessages();
        }
    }
}