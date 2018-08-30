/**
 * INTERFACE: PROPERTY DOCUMENT MODEL
 * */
export interface IPropertyGeneralModel {
    Id: string | null;
}

/**
 * IMPLEMENTED: PROPERTY DOCUMENT MODEL
 * */
export class PropertyGeneralModel {
    Id: string | null;
    constructor(option?: IPropertyGeneralModel) {
        this.Id = null;
    }
}