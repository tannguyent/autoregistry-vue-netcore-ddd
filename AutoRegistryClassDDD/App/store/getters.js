/**
 * VUEX: GETTER
 * */
export var getters = {
    /**
     * GETTER: GET LOOKUP BY KEY
     * @param state
     */
    getlookup: function (state) { return function (key) { return state.lookupStores[key]; }; }
};
//# sourceMappingURL=getters.js.map