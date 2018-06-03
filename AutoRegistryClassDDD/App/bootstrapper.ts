import Vue from "vue";
import VueRouter from "vue-router";

import { Component } from "vue-property-decorator";
import router from "./routes";
import App from "./components/app/AppComponent.vue";

// #region registry css

//import Element from 'element-ui'
//import locale from 'element-ui/lib/locale/lang/en'
//import 'element-ui/lib/theme-chalk/index.css'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import Vuetify from "vuetify";

//Vue.use(Vuetify);
//Vue.use(Element, { locale });
//Vue.use(BootstrapVue);
// #endregion 



Vue.use(VueRouter);

@Component({
    template: "<App/>",
    components: {
        App
    }
})
class RootApp extends Vue { }
export const rootApp = new RootApp({
    router
}).$mount("#app");
