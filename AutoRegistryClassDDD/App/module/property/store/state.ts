import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE
 * */
export interface IPropertyState {
    property?: IPropertyModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyState implements IPropertyState {
    property?: IPropertyModel;
    constructor(option?: IPropertyState) {
        if (option == null) option = {};
        this.property = option.property || null;

    }
}