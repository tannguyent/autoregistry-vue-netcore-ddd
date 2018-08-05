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
