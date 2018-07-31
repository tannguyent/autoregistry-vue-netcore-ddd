import { MutationTree } from 'vuex';
import { IPropertyState } from './state';
import { IPropertyModel } from '../model/property-model';

/**
 * VUEX: MUTATION
 * */
export const mutations: MutationTree<IPropertyState> = {
    /**
     * METHOD: SET CURRENT PROPERTY
     * @param state
     * @param payload
     */
    storedCurrentProperty(state, payload: IPropertyModel) {
        state.property = payload;
    },
};