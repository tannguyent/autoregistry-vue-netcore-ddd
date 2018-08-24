/**
 * INTERFACE: PROPERTY DOCUMENT MODEL
 * */
export interface IPropertyGeneralModel {
    Id?: string;
}

/**
 * IMPLEMENTED: PROPERTY DOCUMENT MODEL
 * */
export class PropertyGeneralModel {
    Id?: string;
    constructor(option?: IPropertyGeneralModel) {
        if (option == null) option = {};
        this.Id = option.Id || null;
    }
}