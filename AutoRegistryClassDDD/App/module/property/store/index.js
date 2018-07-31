import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PropertyState } from './state';
/** INIT STATE */
export var state = new PropertyState();
/** USING NAMESPACE */
var namespaced = true;
/**
 * VUEX: MODULE
 * */
export var PropertyStoreModule = {
    namespaced: namespaced,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
//# sourceMappingURL=index.js.map