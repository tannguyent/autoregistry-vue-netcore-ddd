import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PropertyDocumentState } from './state';
/** INIT STATE */
export var state = new PropertyDocumentState();
/** USING NAMESPACE */
var namespaced = true;
/**
 * VUEX: MODULE
 * */
export var PropertyDocumentStoreModule = {
    namespaced: namespaced,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
//# sourceMappingURL=index.js.map