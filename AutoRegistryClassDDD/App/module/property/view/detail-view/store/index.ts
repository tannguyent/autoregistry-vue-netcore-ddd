import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IPropertyViewState, PropertyViewState } from './state';
import { IRootState } from '../../../../../store/root-state';

/** INIT STATE */
export const state: IPropertyViewState = new PropertyViewState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyViewStoreModule: Module<IPropertyViewState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};