import { ITagViewModel } from "./../../../models/tag-view-model";
/**
 * VUEX: STATE
 * */
export interface IPermissionState {
    roles: string[];
    routeLinks: string[];
}

/**
 * VUEX: STATE
 * */
export class PermissionState implements IPermissionState {
    roles: string[];
    routeLinks: string[];
    constructor() {
        this.roles = [];
        this.routeLinks = [];
    }
}
