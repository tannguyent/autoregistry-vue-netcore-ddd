import _Vue from "vue";
import Axios from "axios";
import { AxiosPluginOptions } from "./plugin.conf";
import Logger from 'js-logger';
import AxiosManager from './axios-conf';

const AxiosPlugin = {
    install(Vue: typeof _Vue, options?: AxiosPluginOptions) {
        Vue.prototype.$httpManager = new AxiosManager();
        Logger.log('axios plugin is installing');
        
    }
}

export default AxiosPlugin;

