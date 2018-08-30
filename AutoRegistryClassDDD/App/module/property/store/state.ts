import { IPropertyModel } from "../model/property-model";

/**
 * VUEX: STATE
 * */
export interface IPropertyState {
    property: IPropertyModel | null;
}

/**
 * VUEX: STATE
 * */
export class PropertyState implements IPropertyState {
    property: IPropertyModel | null;
    constructor() {
        this.property = null;

    }
}