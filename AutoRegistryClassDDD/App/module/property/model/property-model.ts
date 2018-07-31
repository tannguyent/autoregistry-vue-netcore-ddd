/**
 * INTERFACE: PROPERTY MODEL
 * */
export interface IPropertyModel {
    Id?: string;
    Reference?: string;
}

/**
 * IMPLEMENTED: PROPERTY MODEL
 * */
export class PropertyModel {
    Id?: string;
    Reference?: string;
    constructor(option?: IPropertyModel) {
        if (option == null) option = {};
        this.Id = option.Id || null;
        this.Reference = option.Reference || null;
    }
}