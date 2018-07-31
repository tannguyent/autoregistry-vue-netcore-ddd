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
import { Pagination } from "./index";
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
//# sourceMappingURL=grid-option.js.map