/**
 * INTERFACE: PROPERTY DOCUMENT MODEL
 * */
export interface IPropertyDocumentModel {
    Id?: string;
}

/**
 * IMPLEMENTED: PROPERTY DOCUMENT MODEL
 * */
export class PropertyDocumentModel {
    Id?: string;
    constructor(option?: IPropertyDocumentModel) {
        if (option == null) option = {};
        this.Id = option.Id || null;
    }
}