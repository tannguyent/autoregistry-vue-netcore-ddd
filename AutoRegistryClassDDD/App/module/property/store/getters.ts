import { GetterTree } from 'vuex';
import { IPropertyState } from './state';
import { IPropertyModel } from '../model/property-model';
import { IRootState } from '../../../store/root-state';
/**
 * VUEX: GETTER
 * */
export const getters: GetterTree<IPropertyState, IRootState> = {
    /**
     * GETTER: CURRENT PROPERTY
     * @param state
     */
    property(state): IPropertyModel {
        return state.property;
    }
};