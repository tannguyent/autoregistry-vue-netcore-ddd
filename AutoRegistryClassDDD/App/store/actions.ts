import { ActionTree } from "vuex";
import { IRootState } from "./root-state";

/**
 * VUEX ACTION
 * */
export const actions: ActionTree<IRootState, any> = {
    /**
     * METHOD: GET LOOKUP BY NAME
     * @param param0
     */
    getLookups({ commit }, lookupName: string): any {
    }
};