import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IAgendaState, PropertyState } from './state';
import { IRootState } from '../../../store/root-state';

/** INIT STATE */
export const state: IAgendaState = new PropertyState();

/** USING NAMESPACE */
const namespaced: boolean = true;

/**
 * VUEX: MODULE
 * */
export const AgendaStoreModule: Module<IAgendaState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};