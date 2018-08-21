import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
 * */
export interface IPropertyEditState {
    property?: IPropertyModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyEditState implements IPropertyEditState {
    property?: IPropertyModel;
    constructor(option?: IPropertyEditState) {
        if (option == null) option = {};
        this.property = option.property || null;

    }
}