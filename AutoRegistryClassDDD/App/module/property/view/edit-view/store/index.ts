import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IPropertyEditState, PropertyEditState } from './state';
import { IRootState } from '../../../../../store/root-state';

/** INIT STATE */
export const state: IPropertyEditState = new PropertyEditState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyEditStoreModule: Module<IPropertyEditState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};