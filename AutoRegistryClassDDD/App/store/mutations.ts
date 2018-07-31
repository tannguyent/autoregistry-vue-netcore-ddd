import { MutationTree } from 'vuex';
import { IRootState } from './root-state';

/**
 * VUEX: MUTATION
 * */
export const mutations: MutationTree<IRootState> = {

    /**
     * MUTATION: STORE LOOKUPS
     * @param state
     * @param payload
     */
    storedLookup(state, payload: any) {
        state.lookupStores[payload.name] = payload.data;
    },
};