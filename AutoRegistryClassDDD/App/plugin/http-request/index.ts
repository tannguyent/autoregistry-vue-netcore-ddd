import _Vue from "vue";
import Axios from "axios";
import { AxiosPluginOptions } from "./plugin.conf";

const AxiosPlugin = {
    install(Vue: typeof _Vue, options?: AxiosPluginOptions) {
        Vue.prototype.$http = Axios;
        console.log('axios plugin is installing');
    }
}

export default AxiosPlugin;

