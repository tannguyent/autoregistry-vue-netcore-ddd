import Vue from "vue";
import VueRouter from "vue-router";
import { Component } from "vue-property-decorator";
import router from "./routes/route";
import store from "./store";
import App from "./app";

Vue.use(VueRouter);

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
