import { BaseModel } from "./base-model";

export interface IPagination {
    PageIndex?: number;
    PageCount?: number;
    PageSize?: number;
    Total?: number;
}
export class Pagination extends BaseModel<IPagination> implements IPagination {
    PageIndex?: number;
    PageCount?: number;
    PageSize?: number;
    Total?: number;

    constructor(options?: IPagination) {
        super(options);
        this.PageCount = this.PageCount || 1;
        this.PageIndex = this.PageIndex || 1;
        this.PageSize = this.PageSize || 10;
        this.Total = this.Total || 0;
    }
}

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

export interface IGridOptions<TSource> {
    Sources: TSource[];
    Pagination: Pagination | null;
    ColumnsOption: ColumnOptions[];
    IncludeHeader?: boolean;
}
export class GridOptions<TSource> extends BaseModel<IGridOptions<TSource>> implements IGridOptions<TSource>{
    Sources: TSource[];
    Pagination: Pagination | null;
    ColumnsOption: ColumnOptions[];
    IncludeHeader?: boolean;
    constructor(options?: GridOptions<TSource>) {
        super(options);
        this.Sources = this.Sources || null;
        this.Pagination = this.Pagination || new Pagination();
        this.ColumnsOption = this.ColumnsOption || [];
        this.IncludeHeader = this.IncludeHeader || true;
    }
}



