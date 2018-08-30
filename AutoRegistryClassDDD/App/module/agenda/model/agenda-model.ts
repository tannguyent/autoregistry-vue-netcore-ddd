/**
 * INTERFACE: AGENDA MODEL
 * */
export interface IAgendaModel {
    Id: string | null;
    Reference: string| null;
}

/**
 * IMPLEMENTED: AGENDA MODEL
 * */
export class AgendaModel {
    Id: string| null;
    Reference: string| null;
    constructor() {
        this.Id =  null;
        this.Reference =  null;
    }
}