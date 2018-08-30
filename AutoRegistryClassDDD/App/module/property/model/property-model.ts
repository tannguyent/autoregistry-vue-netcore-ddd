/**
 * INTERFACE: PROPERTY MODEL
 * */
export interface IPropertyModel {
    Id: string | null;
    Reference: string| null;
}

/**
 * IMPLEMENTED: PROPERTY MODEL
 * */
export class PropertyModel {
    Id: string | null;
    Reference: string| null;
    constructor() {
        this.Id =  null;
        this.Reference =  null;
    }
}