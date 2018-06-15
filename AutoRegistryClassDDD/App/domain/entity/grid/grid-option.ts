import { BaseModel } from "../index";
import { Pagination, ColumnOptions } from "./index";


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



