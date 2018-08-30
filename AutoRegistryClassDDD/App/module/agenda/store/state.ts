import { IAgendaModel } from "../model/agenda-model";


/**
 * VUEX: STATE
 * */
export interface IAgendaState {
    agenda: IAgendaModel| null;
}

/**
 * VUEX: STATE
 * */
export class PropertyState implements IAgendaState {
    agenda: IAgendaModel | null;
    constructor() {
        this.agenda =  null;

    }
}