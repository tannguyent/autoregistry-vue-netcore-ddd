import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IRootState } from "../../../../../store/root-state";
import { IPermissionState, PermissionState } from './state';

/** INIT STATE */
export const state: IPermissionState = new PermissionState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PermissionStoreModule: Module<IPermissionState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
