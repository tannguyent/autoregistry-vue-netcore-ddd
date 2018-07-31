import { GetterTree } from 'vuex';
import { IRootState } from './root-state';
/**
 * VUEX: GETTER
 * */
export const getters: GetterTree<IRootState, any> = {
    /**
     * GETTER: GET LOOKUP BY KEY
     * @param state
     */
    getlookup: (state) => (key) => state.lookupStores[key]
};