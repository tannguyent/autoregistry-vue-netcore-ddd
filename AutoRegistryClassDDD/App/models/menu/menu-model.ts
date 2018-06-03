import { BaseModel } from "../common/index";

export interface IMenuItem {
    Name?: string;
    Link?: string;
    Icon?: string;
}

export class MenuItem extends BaseModel<IMenuItem> implements IMenuItem {
    Name: string;
    Link: string;
    Icon: string;
    constructor(option?: IMenuItem) {
        super(option);
    }
}