import Vue from "vue";
import VueRouter from "vue-router";
import { Component } from "vue-property-decorator";
import router from "./routes";
import VeeValidate from "vee-validate"
import App from "./components/app/AppComponent.vue";
import { ValidationMixin } from "./mixin/validation.mixin";

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

const veeconfig = {
    inject: true,
    errorBagName: "errors", // change if property conflicts
    events: "input|blur",
    fieldsBagName: "fieldsBags",
    flags: {
        valid: true,
        invalid: false,
        validated: false
    },
    classes: true,
    classNames: {
        valid: "success",
        invalid: "danger"
    }
};
Vue.use(VeeValidate, veeconfig);

Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.mixin(ValidationMixin);

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
