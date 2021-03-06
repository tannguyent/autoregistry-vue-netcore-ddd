﻿import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PropertyViewStoreModule } from './store/index';

const namespace: string = 'property-detail';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class PropertyDetailViewComponent extends Vue {

    get id() { return this.$route.params.id; }
    /**
    * VUE EVENT: CREATED
    * ADD VUEX STORE MODULE BY MANUAL
    * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log(`registry module: ${namespace}`);
            this.$store.registerModule(namespace, PropertyViewStoreModule)
        } else {
            console.log(`reusing module: ${namespace}`);
        }
    }

    /**
     * VUE EVENT: beforeDestroy
     * unregister a module
     * */
    beforeDestroy() {
        const store = this.$store;
        store.unregisterModule(namespace);
        console.log(`unregister module: ${namespace}`);
    }


    currentTabName: string = "general";
    get currentTabComponent(): any {
        debugger
        this.currentTabName;
        return () => import(`./comps/${this.currentTabName}/index`);
    }
    changeTab(tabName: string) {
        debugger
        this.currentTabName = tabName;
    }


}