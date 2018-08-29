import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { TagsViewState, ITagsViewState } from "./state";
import { IRootState } from "../../../../../store/root-state";

/** INIT STATE */
export const state: ITagsViewState = new TagsViewState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyStoreModule: Module<ITagsViewState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
