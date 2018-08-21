import { IPropertyGeneralModel } from "../model/property-general-model";

/**
 * VUEX: STATE
 * */
export interface IPropertyGeneralState {
    general?: IPropertyGeneralModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyGeneralState implements IPropertyGeneralState {
    general?: IPropertyGeneralModel;
    constructor(option?: IPropertyGeneralState) {
        if (option == null) option = {};
        this.general = option.general || null;

    }
}