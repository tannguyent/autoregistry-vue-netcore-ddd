import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
 * */
export interface IPropertyEditState {
    property: IPropertyModel | null;
}

/**
 * VUEX: STATE
 * */
export class PropertyEditState implements IPropertyEditState {
    property: IPropertyModel| null;
    constructor() {
        this.property = null;

    }
}