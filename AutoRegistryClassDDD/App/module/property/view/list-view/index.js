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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PropertySidebarComponent from './side-bar';
var DataTableComponent = function (resolve) { return require(['../../../../components/data-table'], resolve); };
var PropertyListViewComponent = /** @class */ (function (_super) {
    __extends(PropertyListViewComponent, _super);
    function PropertyListViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyListViewComponent.prototype, "tableConfig", {
        get: function () {
            return {
                columns: [
                    {
                        title: "ID",
                        field: 'Id',
                        sortable: true,
                        colStyle: { width: '200px' }
                    },
                    {
                        title: "Reference",
                        field: 'Reference',
                        sortable: true,
                    },
                    {
                        title: 'Operation',
                        tdComp: 'TdActionComponent',
                        colStyle: { width: '300px' },
                        fixed: 'right',
                    }
                ],
                hasPagination: true
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyListViewComponent.prototype, "tableSource", {
        get: function () {
            return [
                {
                    Id: "1",
                    Reference: 'Reference',
                },
                {
                    Id: "2",
                    Reference: 'Reference',
                },
                {
                    Id: "3",
                    Reference: 'Reference',
                },
                {
                    Id: "4",
                    Reference: 'Reference',
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    PropertyListViewComponent = __decorate([
        Component({
            template: require('./index.html'),
            components: {
                'side-bar-component': PropertySidebarComponent,
                'data-table': DataTableComponent
            }
        })
    ], PropertyListViewComponent);
    return PropertyListViewComponent;
}(Vue));
export default PropertyListViewComponent;
//# sourceMappingURL=index.js.map