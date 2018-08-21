/**
 * INTERFACE: AGENDA MODEL
 * */
export interface IAgendaModel {
    Id?: string;
    Reference?: string;
}

/**
 * IMPLEMENTED: AGENDA MODEL
 * */
export class AgendaModel {
    Id?: string;
    Reference?: string;
    constructor(option?: IAgendaModel) {
        if (option == null) option = {};
        this.Id = option.Id || null;
        this.Reference = option.Reference || null;
    }
}