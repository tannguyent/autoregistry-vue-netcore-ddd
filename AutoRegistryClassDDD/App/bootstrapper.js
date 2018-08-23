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
import Vue from "vue";
import VueRouter from "vue-router";
import { Component } from "vue-property-decorator";
import router from "./routes/route";
import store from "./store";
import App from "./app";
import AxiosPlugin from "./plugin/http-request";
Vue.use(VueRouter);
Vue.use(AxiosPlugin);
/*
    CURRENTLY I HAD COMMENT THIS COMPONENT BECAUSE IT MAKE OUR APPLICATION IS MEMORY LEAK
    MEMORY LEAK
    https://github.com/OneWayTech/vue2-datatable/issues/142
*/
import Datatable from 'vue2-datatable-component';
Vue.use(Datatable);
var RootApp = /** @class */ (function (_super) {
    __extends(RootApp, _super);
    function RootApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootApp = __decorate([
        Component({
            template: "<App/>",
            components: {
                App: App
            }
        })
    ], RootApp);
    return RootApp;
}(Vue));
export var rootApp = new RootApp({
    router: router,
    store: store
}).$mount("#app");
//// service worker
//if ('serviceWorker' in navigator) {
//    navigator.serviceWorker.register('/service-worker.js', { scope: './' }).then(function (registration) {
//        console.log('ServiceWorker registration successful!');
//    }).catch(function (err) {
//        console.log('ServiceWorker registration failed: ', err);
//    });
//}
//# sourceMappingURL=bootstrapper.js.map