import { IAgendaModel } from "../model/agenda-model";


/**
 * VUEX: STATE
 * */
export interface IAgendaState {
    agenda?: IAgendaModel;
}

/**
 * VUEX: STATE
 * */
export class PropertyState implements IAgendaState {
    agenda?: IAgendaModel;
    constructor(option?: IAgendaState) {
        if (option == null) option = {};
        this.agenda = option.agenda || null;

    }
}