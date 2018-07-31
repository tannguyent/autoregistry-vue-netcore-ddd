import Axios from "axios";
// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function AxiosPlugin(Vue, options) {
    // do stuff with options
    Vue.prototype.$http = Axios;
}
var AxiosPluginOptions = /** @class */ (function () {
    function AxiosPluginOptions() {
    }
    return AxiosPluginOptions;
}());
export { AxiosPluginOptions };
//# sourceMappingURL=index.js.map