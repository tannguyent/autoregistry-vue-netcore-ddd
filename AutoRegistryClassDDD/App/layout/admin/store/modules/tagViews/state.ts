import { ITagViewModel } from "./../../../models/tag-view-model";
/**
 * VUEX: STATE
 * */
export interface ITagsViewState {
    visitedViews: ITagViewModel[];
    cachedViews: string[];
}

/**
 * VUEX: STATE
 * */
export class TagsViewState implements ITagsViewState {
    visitedViews: ITagViewModel[];
    cachedViews: string[];
    constructor() {
        this.visitedViews = [];
        this.cachedViews = [];
    }
}
