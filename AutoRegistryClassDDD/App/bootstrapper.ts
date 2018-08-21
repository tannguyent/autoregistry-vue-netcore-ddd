import Vue from "vue";
import VueRouter from "vue-router";
import { Component } from "vue-property-decorator";
import router from "./routes/route";
import store from "./store";
import App from "./app";
import MixinComponent from "./mixin/mixin";
import AxiosPlugin from "./plugin/http-request";

Vue.use(VueRouter);
Vue.use(AxiosPlugin);

import dataContextPlugin from "./plugin/dataContext";
Vue.use(dataContextPlugin);
/*
    CURRENTLY I HAD COMMENT THIS COMPONENT BECAUSE IT MAKE OUR APPLICATION IS MEMORY LEAK
    MEMORY LEAK
    https://github.com/OneWayTech/vue2-datatable/issues/142
*/
import Datatable from 'vue2-datatable-component'

Vue.use(Datatable);

@Component({
    template: "<App/>",
    components: {
        App
    }
})
class RootApp extends Vue { }

export const rootApp = new RootApp({
    router,
    store
}).$mount("#app");
