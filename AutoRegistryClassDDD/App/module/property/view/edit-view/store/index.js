import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PropertyEditState } from './state';
/** INIT STATE */
export var state = new PropertyEditState();
/** USING NAMESPACE */
var namespaced = true;
/**
 * VUEX: MODULE
 * */
export var PropertyEditStoreModule = {
    namespaced: namespaced,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
//# sourceMappingURL=index.js.map