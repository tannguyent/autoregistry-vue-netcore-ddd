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
import { AgendaStoreModule } from './store';
var namespace = 'agenda';
var AgendaModuleComponent = /** @class */ (function (_super) {
    __extends(AgendaModuleComponent, _super);
    function AgendaModuleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    AgendaModuleComponent.prototype.created = function () {
        var store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log("registry module: " + namespace);
            this.$store.registerModule(namespace, AgendaStoreModule);
        }
        else {
            console.log("reusing module: " + namespace);
        }
    };
    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    AgendaModuleComponent.prototype.beforeDestroy = function () {
        var store = this.$store;
        store.unregisterModule(namespace);
        console.log("unregister module: " + namespace);
    };
    AgendaModuleComponent = __decorate([
        Component({
            template: require('./index.html'),
            components: {}
        })
    ], AgendaModuleComponent);
    return AgendaModuleComponent;
}(Vue));
export default AgendaModuleComponent;
//# sourceMappingURL=index.js.map