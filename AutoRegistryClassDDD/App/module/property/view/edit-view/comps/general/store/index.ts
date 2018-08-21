import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IPropertyGeneralState, PropertyGeneralState } from './state';
import { IRootState } from '../../../../../../../store/root-state';

/** INIT STATE */
export const state: IPropertyGeneralState = new PropertyGeneralState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyGeneralStoreModule: Module<IPropertyGeneralState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};