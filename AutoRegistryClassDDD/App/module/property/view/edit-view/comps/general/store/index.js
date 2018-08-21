import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PropertyGeneralState } from './state';
/** INIT STATE */
export var state = new PropertyGeneralState();
/** USING NAMESPACE */
var namespaced = true;
/**
 * VUEX: MODULE
 * */
export var PropertyGeneralStoreModule = {
    namespaced: namespaced,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
//# sourceMappingURL=index.js.map