import { IPropertyDocumentModel } from "../model/property-document-model";

/**
 * VUEX: STATE FOR PROPERTY DOCUMENT
   STORED:
   - LOOKUP USED FOR PROPERTY DOCUMENT
   - ALL DOCUMENT OF PROPERTY
   - THINKING: HAVE A VARIABLE TO KEEP DOCUMENTS THEN YOU MOVE TO ANOTHER TABS THEN WE WILL UPDATE TO PARENT: PROPERTY
 * */
export interface IPropertyDocumentState {
    documents?: IPropertyDocumentModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyDocumentState implements IPropertyDocumentState {
    documents?: IPropertyDocumentModel;
    constructor(option?: IPropertyDocumentState) {
        if (option == null) option = {};
        this.documents = option.documents || null;

    }
}