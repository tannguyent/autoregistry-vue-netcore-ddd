import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
 * */
export interface IPropertyViewState {
    property: IPropertyModel| null;
}

/**
 * VUEX: STATE
 * */
export class PropertyViewState implements IPropertyViewState {
    property: IPropertyModel | null;
    constructor(option?: IPropertyViewState) {
        this.property =  null;

    }
}