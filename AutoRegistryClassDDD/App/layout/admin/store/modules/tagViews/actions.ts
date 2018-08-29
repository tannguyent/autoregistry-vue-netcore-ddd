import { ActionTree } from "vuex";
import { IRootState } from "../../../../../store/root-state";
import { ITagsViewState } from "./state";

/**
 * VUEX ACTION
 * */
export const actions: ActionTree<ITagsViewState, IRootState> = {
    /**
     *
     * @param param0
     * @param view
     * No return value
     */
    addVisitedViews({ getters, commit }, view) {
        commit("ADD_VISITED_VIEWS", view);
    },

    /**
     *
     * @param param0
     * @param view
     */
    delVisitedViews({ getters, commit }, view) {
        return new Promise(resolve => {
            commit("DEL_VISITED_VIEWS", view);
            resolve([...getters.visitedViews]);
        });
    },

    /**
     *
     * @param param0
     * @param view
     */
    delOthersViews({ getters, commit }, view) {
        return new Promise(resolve => {
            commit("DEL_OTHERS_VIEWS", view);
            resolve([...getters.visitedViews]);
        });
    },

    /**
     *
     * @param param0
     */
    delAllViews({ getters, commit }) {
        return new Promise(resolve => {
            commit("DEL_ALL_VIEWS");
            resolve(getters.visitedViews);
        });
    }
};
