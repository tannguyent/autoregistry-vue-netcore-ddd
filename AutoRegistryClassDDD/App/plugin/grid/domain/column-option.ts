import { BaseModel } from "./base-model";

export interface IColumnOptions {
    Index?: number;
    Name?: string;
    IsHidden?: boolean;
    SortType?: string;
    Fixed?: string;
    CanSort?: boolean;
}

export class ColumnOptions extends BaseModel<IColumnOptions> implements IColumnOptions {
    Index: number;
    Name: string;
    IsHidden: boolean;
    Fixed: string;
    SortType: string;
    CanSort: boolean;

    constructor(options?: IColumnOptions) {
        super(options);

        this.Index = this.Index || 1;
        this.Name = this.Name || null;
        this.IsHidden = this.IsHidden || false;
        this.Fixed = this.Fixed || null;
        this.CanSort = this.CanSort || false;
        this.SortType = this.SortType || null;
    }
}