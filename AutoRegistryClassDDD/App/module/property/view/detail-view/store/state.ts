import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
 * */
export interface IPropertyViewState {
    property?: IPropertyModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyViewState implements IPropertyViewState {
    property?: IPropertyModel;
    constructor(option?: IPropertyViewState) {
        if (option == null) option = {};
        this.property = option.property || null;

    }
}