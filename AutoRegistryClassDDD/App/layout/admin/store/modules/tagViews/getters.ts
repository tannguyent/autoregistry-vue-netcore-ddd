import { GetterTree } from "vuex";
import { ITagsViewState } from "./state";
import { IRootState } from "../../../../../store/root-state";
import { ITagViewModel } from "../../../models/tag-view-model";
/**
 * VUEX: GETTER
 * */
export const getters: GetterTree<ITagsViewState, IRootState> = {
    /**
     * 
     * @param state 
     */
    visitedViews(state): ITagViewModel[] {
        return state.visitedViews || [];
    },
    /**
     * 
     * @param state 
     */
    cachedViews(state): string[] {
        return state.cachedViews || [];
    }
};
