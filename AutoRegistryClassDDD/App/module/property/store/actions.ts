import { ActionTree } from "vuex";
import { IRootState } from "../../../store/root-state";
import { IPropertyState } from "./state";

/**
 * VUEX ACTION
 * */
export const actions: ActionTree<IPropertyState, IRootState> = {
    /**
     * METHOD: GET LIST
     * @param param0
     */
    getDetailProperty({ commit }, id: number): any {
    }
};