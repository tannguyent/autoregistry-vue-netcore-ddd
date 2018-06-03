var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseModel } from "./base-model";
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination(options) {
        var _this = _super.call(this, options) || this;
        _this.PageCount = _this.PageCount || 1;
        _this.PageIndex = _this.PageIndex || 1;
        _this.PageSize = _this.PageSize || 10;
        _this.Total = _this.Total || 0;
        return _this;
    }
    return Pagination;
}(BaseModel));
export { Pagination };
var ColumnOptions = /** @class */ (function (_super) {
    __extends(ColumnOptions, _super);
    function ColumnOptions(options) {
        var _this = _super.call(this, options) || this;
        _this.Index = _this.Index || 1;
        _this.Name = _this.Name || null;
        _this.IsHidden = _this.IsHidden || false;
        _this.Fixed = _this.Fixed || null;
        _this.CanSort = _this.CanSort || false;
        _this.SortType = _this.SortType || null;
        return _this;
    }
    return ColumnOptions;
}(BaseModel));
export { ColumnOptions };
var GridOptions = /** @class */ (function (_super) {
    __extends(GridOptions, _super);
    function GridOptions(options) {
        var _this = _super.call(this, options) || this;
        _this.Sources = _this.Sources || null;
        _this.Pagination = _this.Pagination || new Pagination();
        _this.ColumnsOption = _this.ColumnsOption || [];
        _this.IncludeHeader = _this.IncludeHeader || true;
        return _this;
    }
    return GridOptions;
}(BaseModel));
export { GridOptions };
//# sourceMappingURL=grid-options.js.map