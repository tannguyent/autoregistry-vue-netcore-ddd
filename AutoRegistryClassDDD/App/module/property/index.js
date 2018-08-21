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
import { PropertyStoreModule } from './store';
var namespace = 'property';
var PropertyModuleComponent = /** @class */ (function (_super) {
    __extends(PropertyModuleComponent, _super);
    function PropertyModuleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    PropertyModuleComponent.prototype.created = function () {
        var store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log("registry module: " + namespace);
            this.$store.registerModule(namespace, PropertyStoreModule);
        }
        else {
            console.log("reusing module: " + namespace);
        }
    };
    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    PropertyModuleComponent.prototype.beforeDestroy = function () {
        var store = this.$store;
        store.unregisterModule(namespace);
        console.log("unregister module: " + namespace);
    };
    PropertyModuleComponent = __decorate([
        Component({
            template: require('./index.html'),
            components: {}
        })
    ], PropertyModuleComponent);
    return PropertyModuleComponent;
}(Vue));
export default PropertyModuleComponent;
//# sourceMappingURL=index.js.map