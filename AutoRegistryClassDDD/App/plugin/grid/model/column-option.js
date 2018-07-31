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
//# sourceMappingURL=column-option.js.map