import _Vue from "vue";
import Axios from "axios";
import { AxiosPluginOptions } from "./plugin.conf";
import * as Logger from 'js-logger';

const AxiosPlugin = {
    install(Vue: typeof _Vue, options?: AxiosPluginOptions) {
        Vue.prototype.$http = Axios;
        Logger.log('axios plugin is installing');
    }
}

export default AxiosPlugin;

