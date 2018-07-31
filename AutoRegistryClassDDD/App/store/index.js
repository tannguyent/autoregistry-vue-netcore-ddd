import Vue from "vue";
import Vuex from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
var debug = process.env.NODE_ENV !== 'production';
/*
 * REGISTRY VUEX FOR VUE
 */
Vue.use(Vuex);
/*
 * VUEX: INIT
 * NOTE: DONT REGISTRY MODULES AT HERE BECAUSE WE WILL REGISTRY MODULE BY MANUAL
 * ROOT STATE:
 */
export default new Vuex.Store({
    getters: getters,
    mutations: mutations,
    actions: actions,
    strict: debug
});
//# sourceMappingURL=index.js.map