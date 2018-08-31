/**
 * INTERFACE: 
 * */
export interface ISearchResultModel {
    Id: string | null;
    Reference: string| null;
}

/**
 * IMPLEMENTED: 
 * */
export class SearchResultModel implements ISearchResultModel {
    Id: string | null;
    Reference: string| null;
    constructor() {
        this.Id =  null;
        this.Reference =  null;
    }
}