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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
var namespace = 'datatable';
import TdActionComponent from "./comps/td-action";
var DataTableComponent = /** @class */ (function (_super) {
    __extends(DataTableComponent, _super);
    function DataTableComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataTableComponent.prototype, "tableSource", {
        get: function () {
            return {
                fixHeaderAndSetBodyMaxHeight: 200,
                tblStyle: 'table-layout: fixed',
                tblClass: 'table-bordered',
                columns: this.config.columns,
                data: this.source,
                total: 2,
                query: {},
                HeaderSettings: false,
                Pagination: false,
                supportNested: true,
                supportBackup: true,
                selection: [],
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    DataTableComponent.prototype.created = function () {
    };
    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    DataTableComponent.prototype.beforeDestroy = function () {
    };
    __decorate([
        Prop({ required: true }),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "config", void 0);
    __decorate([
        Prop({ required: false }),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "search", void 0);
    __decorate([
        Prop({ required: true }),
        __metadata("design:type", Array)
    ], DataTableComponent.prototype, "source", void 0);
    DataTableComponent = __decorate([
        Component({
            template: require('./index.html'),
            components: {
                TdActionComponent: TdActionComponent
            },
        })
    ], DataTableComponent);
    return DataTableComponent;
}(Vue));
export default DataTableComponent;
//# sourceMappingURL=index.js.map