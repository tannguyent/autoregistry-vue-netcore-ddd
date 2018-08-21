/**
 * INTERFACE: PROPERTY  MODEL
 * */
export interface IPropertyModel {
    Id?: string;
}

/**
 * IMPLEMENTED: PROPERTY  MODEL
 * */
export class PropertyModel {
    Id?: string;
    constructor(option?: IPropertyModel) {
        if (option == null) option = {};
        this.Id = option.Id || null;
    }
}