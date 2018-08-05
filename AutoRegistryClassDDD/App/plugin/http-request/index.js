import Axios from "axios";
var AxiosPlugin = {
    install: function (Vue, options) {
        Vue.prototype.$http = Axios;
        console.log('axios plugin is installing');
    }
};
export default AxiosPlugin;
//# sourceMappingURL=index.js.map