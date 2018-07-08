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