import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IPropertyState, PropertyState } from './state';
import { IRootState } from '../../../store/root-state';

/** INIT STATE */
export const state: IPropertyState = new PropertyState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyStoreModule: Module<IPropertyState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};