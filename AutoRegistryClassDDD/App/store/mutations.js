/**
 * VUEX: MUTATION
 * */
export var mutations = {
    /**
     * MUTATION: STORE LOOKUPS
     * @param state
     * @param payload
     */
    storedLookup: function (state, payload) {
        state.lookupStores[payload.name] = payload.data;
    },
};
//# sourceMappingURL=mutations.js.map