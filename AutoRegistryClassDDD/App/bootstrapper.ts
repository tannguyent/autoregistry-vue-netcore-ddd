﻿import Vue from "vue";
import VueRouter from "vue-router";
import { Component } from "vue-property-decorator";
import router from "./routes/route";
import store from "./store";
import App from "./app";

Vue.use(VueRouter);

import AxiosPlugin from "./plugin/http-request";
Vue.use(AxiosPlugin);

/** SERVICE WORKER */
import runtime from "serviceworker-webpack-plugin/lib/runtime";
if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}


/** Logger */
import LggerPlugin from './plugin/logger';
Vue.use(LggerPlugin)

/** Other Vue configs */
Vue.config.productionTip = false;


// VueRx can use libraries other than RxJS
// that implement the observable interface.
import { Observable, Subscription, Subject } from 'rxjs'
import VueRx from 'vue-rx';
Vue.use(VueRx, { Observable, Subscription, Subject })

/*
    CURRENTLY I HAD COMMENT THIS COMPONENT BECAUSE IT MAKE OUR APPLICATION IS MEMORY LEAK
    MEMORY LEAK
    https://github.com/OneWayTech/vue2-datatable/issues/142
*/
//import Datatable from "vue2-datatable-component";
//Vue.use(Datatable);

/** Main App resources */
import "../scss/main.scss";
import "bootstrap";

@Component({
  template: "<App/>",
  components: {
    App
  }
})
class RootApp extends Vue {}

export const rootApp = new RootApp({
  router,
  store
}).$mount("#app");
