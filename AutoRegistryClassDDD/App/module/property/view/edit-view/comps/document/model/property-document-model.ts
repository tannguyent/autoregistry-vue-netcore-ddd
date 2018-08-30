/**
 * INTERFACE: PROPERTY DOCUMENT MODEL
 * */
export interface IPropertyDocumentModel {
    Id: string | null;
}

/**
 * IMPLEMENTED: PROPERTY DOCUMENT MODEL
 * */
export class PropertyDocumentModel {
    Id: string | null;
    constructor() {
        this.Id = null;
    }
}