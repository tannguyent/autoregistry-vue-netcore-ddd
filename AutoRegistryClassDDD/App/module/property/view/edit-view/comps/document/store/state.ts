import { IPropertyDocumentModel } from "../model/property-document-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
   STORED:
   - LOOKUP USED FOR PROPERTY DOCUMENT
   - ALL DOCUMENT OF PROPERTY
   - THINKING: HAVE A VARIABLE TO KEEP DOCUMENTS THEN YOU MOVE TO ANOTHER TABS THEN WE WILL UPDATE TO PARENT: PROPERTY
 * */
export interface IPropertyDocumentState {
    documents: IPropertyDocumentModel| null;
}

/**
 * VUEX: STATE
 * */
export class PropertyDocumentState implements IPropertyDocumentState {
    documents: IPropertyDocumentModel | null;
    constructor() {
        this.documents =  null;

    }
}