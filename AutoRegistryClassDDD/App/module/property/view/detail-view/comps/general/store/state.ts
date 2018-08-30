import { IPropertyGeneralModel } from "../model/property-general-model";

/**
 * VUEX: STATE
 * */
export interface IPropertyGeneralState {
    general: IPropertyGeneralModel | null;
}

/**
 * VUEX: STATE
 * */
export class PropertyGeneralState implements IPropertyGeneralState {
    general: IPropertyGeneralModel| null;
    constructor() {
        this.general =  null;

    }
}