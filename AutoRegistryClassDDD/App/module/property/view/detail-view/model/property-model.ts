/**
 * INTERFACE: PROPERTY  MODEL
 * */
export interface IPropertyModel {
    Id: string | null;
}

/**
 * IMPLEMENTED: PROPERTY  MODEL
 * */
export class PropertyModel {
    Id: string | null;
    constructor() {
        this.Id = null;
    }
}