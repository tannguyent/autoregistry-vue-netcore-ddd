import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IPropertyDocumentState, PropertyDocumentState } from './state';
import { IRootState } from '../../../../../../../store/root-state';

/** INIT STATE */
export const state: IPropertyDocumentState = new PropertyDocumentState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const PropertyDocumentStoreModule: Module<IPropertyDocumentState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};