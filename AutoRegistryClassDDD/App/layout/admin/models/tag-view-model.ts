/**
 * INTERFACE:
 * */
export interface ITagViewMetaModel {
	Title: string | null;
	Nocache: boolean | null;
}

/**
 * INTERFACE:
 * */
export interface ITagViewModel {
	Path: string | null;
	Name: string | null;
	Meta: ITagViewMetaModel;
}

/**
 * IMPLEMENTED:
 * */
export class TagViewModel {
	path: string | null;
	Name: string | null;
	Meta: ITagViewMetaModel;
	constructor() {
		this.Meta = { Title: null, Nocache: true };
		this.Name = null;
		this.path = null;
	}
}
