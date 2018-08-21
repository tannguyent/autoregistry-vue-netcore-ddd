/**
    COLUMN CONFIG
*/
export interface IDataTableColumnConfig {
    title: string;
    field: string;
    sortable: boolean,
    width: number,
    titleAlign: string,
    columnAlign: string;
    isResize: boolean;
}

export interface IDataTableSearchCondition {
}

export interface IDataTableSource {
}


/*
    DATA TABLE CONFIG 
*/
export interface IDataTableConfig {
    columns: IDataTableColumnConfig[];
    hasPagination: boolean
}